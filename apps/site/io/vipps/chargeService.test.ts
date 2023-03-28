import { ChargeService } from "io/vipps/chargeService"
import { vippsConfig } from "mocks/config"
import { mockPostCharge } from "mocks/server"

describe("chargeService", () => {
  it("creates charge", async () => {
    const chargeId = "charge-id"
    const agreementId = "agreement-id"
    const due = "2020-01-01"
    const chargeService = new ChargeService(vippsConfig)

    mockPostCharge(agreementId, chargeId)

    const response = await chargeService.createCharge(agreementId, due)

    expect(response.chargeId).toEqual(chargeId)
  })
})
