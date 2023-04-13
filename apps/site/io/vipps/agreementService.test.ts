import { expect } from "@jest/globals"

import { AgreementService } from "io/vipps/agreementService"
import {
  FetchingAgreementError,
  PostingAgreementError,
  StoppingAgreementError,
} from "io/vipps/errors"
import { vippsConfig } from "mocks/config"
import {
  mockGetAgreementError,
  mockPostAgreement,
  mockPostAgreementError,
  mockStopAgreementError,
} from "mocks/server"

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

  it("throws error when posting new agreement fails", async () => {
    const error: ErrorResponse = {
      status: 401,
      details: "Unauthorized",
    }

    const agreementService = new AgreementService(vippsConfig)

    mockPostAgreementError(error)

    await expect(() => agreementService.newAgreement()).rejects.toThrow(
      new PostingAgreementError(error.details, error.status),
    )
  })

  it("gets existing agreement", async () => {
    const id = "apdiqwcybw9iuycb"
    const agreementService = new AgreementService(vippsConfig)
    const response = await agreementService.getAgreement(id)

    expect(response.id).toEqual(id)
  })

  it("throws error when failing to get agreement", async () => {
    const id = "apdiqwcybw9iuycb"
    const error: ErrorResponse = {
      status: 500,
      details: "Beep boop, I'm an error",
    }

    const agreementService = new AgreementService(vippsConfig)

    mockGetAgreementError(id, error)

    await expect(() => agreementService.getAgreement(id)).rejects.toThrow(
      new FetchingAgreementError(id, error.details, error.status),
    )
  })

  it("stops existing agreement", async () => {
    const id = "aoscbqouc12d91ub"
    const agreementService = new AgreementService(vippsConfig)
    const response = await agreementService.stopAgreement(id)

    expect(response).toEqual(204)
  })

  it("throws error if it fails to stop existing agreement", async () => {
    const id = "aoscbqouc12d91ub"
    const agreementService = new AgreementService(vippsConfig)

    mockStopAgreementError(401)

    await expect(() => agreementService.stopAgreement(id)).rejects.toThrow(
      new StoppingAgreementError(id, 401),
    )
  })
})
