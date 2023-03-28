import { AgreementService } from "io/vipps/agreementService"
import { vippsConfig } from "mocks/config"
import {
  mockGetAgreement,
  mockPostAgreement,
  mockStopAgreement,
} from "mocks/server"
import { expect } from "@jest/globals"

describe("agreementService", () => {
  it("posts new agreement", async () => {
    const expected: Partial<AgreementResponseBody> = {
      agreementId: "some-random-agreement-id",
    }

    const agreementService = new AgreementService(vippsConfig)

    mockPostAgreement(expected)

    const response = await agreementService.newAgreement()

    expect(response.agreementId).toEqual(expected.agreementId)
  })

  it("gets existing agreement", async () => {
    const id = "apdiqwcybw9iuycb"
    const expected: Partial<Agreement> = {
      id,
    }

    const agreementService = new AgreementService(vippsConfig)

    mockGetAgreement(id, expected)

    const response = await agreementService.getAgreement(id)

    expect(response.id).toEqual(expected.id)
  })

  it("stops existing agreement", async () => {
    const id = "apdiqwcybw9iuycb"
    const agreementService = new AgreementService(vippsConfig)

    mockStopAgreement(id)

    const response = await agreementService.stopAgreement(id)

    expect(response).toEqual(204)
  })
})
