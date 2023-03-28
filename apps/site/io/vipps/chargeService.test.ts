import { expect } from "@jest/globals"
import { ChargeService } from "io/vipps/chargeService"
import { vippsConfig } from "mocks/config"
import { mockCaptureCharge, mockCaptureError } from "mocks/server"
import { FailedCaptureError } from "io/vipps/errors"

describe("chargeService", () => {
  it("captures charge", async () => {
    const agreementId = "agreement-id"
    const chargeId = "charge-id"
    const chargeService = new ChargeService(vippsConfig)

    mockCaptureCharge(agreementId, chargeId)

    const status = await chargeService.captureCharge(
      agreementId,
      chargeId,
      2000,
    )

    expect(status).toEqual(204)
  })

  it("throws error when capture was unsuccessful", async () => {
    const agreementId = "agreement-id"
    const chargeId = "charge-id"
    const chargeService = new ChargeService(vippsConfig)

    mockCaptureError(agreementId, chargeId)

    await expect(() =>
      chargeService.captureCharge(agreementId, chargeId, 2000),
    ).rejects.toThrow(FailedCaptureError)
  })
})
