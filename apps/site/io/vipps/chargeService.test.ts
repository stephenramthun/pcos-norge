import { expect } from "@jest/globals"
import { ChargeService } from "io/vipps/chargeService"
import { vippsConfig } from "mocks/config"
import {
  mockCaptureCharge,
  mockCaptureError,
  mockGetCharges,
  mockGetChargesError,
} from "mocks/server"
import { CapturingChargeError, FetchingChargesError } from "io/vipps/errors"
import { getUnpaidAgreements, updatePaidDate } from "db/prisma/dao/agreement"
import { waitFor } from "@testing-library/react"

jest.mock("db/prisma/dao/agreement", () => ({
  getUnpaidAgreements: jest.fn(),
  updatePaidDate: jest.fn(),
}))

describe("chargeService", () => {
  const getUnpaidAgreementsMock = getUnpaidAgreements as jest.Mock
  const updatePaidDateMock = updatePaidDate as jest.Mock

  afterEach(() => {
    getUnpaidAgreementsMock.mockReset()
    updatePaidDateMock.mockReset()
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.unmock("db/prisma/dao/agreement")
  })

  it("gets charges for agreement", async () => {
    const agreementId = "agreement-id"
    const charges: ChargeResponseBody[] = [
      {
        id: "charge-1",
        amount: 2000,
        status: "RESERVED",
        history: [{ occurred: "2020-01-01" }],
      },
      {
        id: "charge-2",
        amount: 4000,
        status: "CHARGED",
        history: [{ occurred: "2020-01-01" }],
      },
    ]

    mockGetCharges(agreementId, charges)

    const chargeService = new ChargeService(vippsConfig)

    const result = await chargeService.getCharges(agreementId)

    expect(result).toEqual(charges)
  })

  it("throws error when failing to get charges", async () => {
    const agreementId = "agreement-id"

    mockGetChargesError(agreementId)

    const chargeService = new ChargeService(vippsConfig)

    await expect(() => chargeService.getCharges(agreementId)).rejects.toThrow(
      FetchingChargesError,
    )
  })

  it("captures charge", async () => {
    const agreementId = "agreement-id"
    const chargeId = "charge-id"
    const chargeService = new ChargeService(vippsConfig)

    mockCaptureCharge(agreementId, chargeId)

    const response = await chargeService.captureCharge(
      agreementId,
      chargeId,
      2000,
    )

    expect(response.status).toEqual(204)
  })

  it("throws error when capture was unsuccessful", async () => {
    const agreementId = "agreement-id"
    const chargeId = "charge-id"
    const chargeService = new ChargeService(vippsConfig)

    mockCaptureError(agreementId, chargeId)

    await expect(() =>
      chargeService.captureCharge(agreementId, chargeId, 2000),
    ).rejects.toThrow(CapturingChargeError)
  })

  it("charges unpaid agreements", async () => {
    const agreementId = "agreement-id"
    const charges: ChargeResponseBody[] = [
      {
        id: "charge-1",
        amount: 2000,
        status: "RESERVED",
        history: [{ occurred: "2020-01-01" }],
      },
      {
        id: "charge-2",
        amount: 4000,
        status: "CHARGED",
        history: [{ occurred: "2020-01-01" }],
      },
      {
        id: "charge-3",
        amount: 4000,
        status: "CANCELLED",
        history: [{ occurred: "2020-01-01" }],
      },
    ]

    getUnpaidAgreementsMock.mockReturnValue([
      {
        id: agreementId,
        userId: "some-user",
        status: "ACTIVE",
        start: null,
        stop: null,
        createdAt: new Date(),
      },
    ])

    const chargeService = new ChargeService(vippsConfig)

    mockGetCharges(agreementId, charges)
    mockCaptureCharge(agreementId, "charge-1")

    await chargeService.chargeUnpaidAgreements()

    await waitFor(() => {
      expect(updatePaidDateMock).toHaveBeenCalledTimes(2)
      expect(updatePaidDateMock).toHaveBeenNthCalledWith(
        1,
        agreementId,
        new Date("2020-01-01"),
      )
      expect(updatePaidDateMock).toHaveBeenNthCalledWith(2, agreementId)
    })
  })
})
