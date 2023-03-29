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
import {
  getReservedAgreements,
  updatePaymentStatus,
} from "db/prisma/dao/agreement"
import { waitFor } from "@testing-library/react"

jest.mock("db/prisma/dao/agreement", () => ({
  getReservedAgreements: jest.fn(),
  updatePaymentStatus: jest.fn(),
}))

describe("chargeService", () => {
  const getReservedAgreementsMock = getReservedAgreements as jest.Mock
  const updatePaymentStatusMock = updatePaymentStatus as jest.Mock

  afterEach(() => {
    getReservedAgreementsMock.mockReset()
    updatePaymentStatusMock.mockReset()
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
      },
      {
        id: "charge-2",
        amount: 4000,
        status: "CHARGED",
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

  it("captures reserved agreements", async () => {
    const agreementId = "agreement-id"
    const charges: ChargeResponseBody[] = [
      {
        id: "charge-1",
        amount: 2000,
        status: "RESERVED",
      },
      {
        id: "charge-2",
        amount: 4000,
        status: "CHARGED",
      },
      {
        id: "charge-3",
        amount: 4000,
        status: "CANCELLED",
      },
    ]

    getReservedAgreementsMock.mockReturnValue([
      {
        id: agreementId,
        userId: "some-user",
        status: "ACTIVE",
        start: null,
        stop: null,
        createdAt: new Date(),
        payment: "RESERVED",
      },
    ])

    const chargeService = new ChargeService(vippsConfig)

    mockGetCharges(agreementId, charges)
    mockCaptureCharge(agreementId, "charge-1")

    await chargeService.captureReservedAgreements()

    await waitFor(() => {
      expect(updatePaymentStatusMock).toHaveBeenCalledTimes(2)
      expect(updatePaymentStatusMock).toHaveBeenNthCalledWith(
        1,
        agreementId,
        "CHARGED",
      )
      expect(updatePaymentStatusMock).toHaveBeenNthCalledWith(
        2,
        agreementId,
        "CHARGED",
      )
    })
  })
})
