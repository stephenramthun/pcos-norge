import { expect } from "@jest/globals"
import dayjs from "dayjs"

import {
  AccessTokenResponse,
  AccessTokenService,
} from "io/vipps/accessTokenService"
import { vippsConfig } from "mocks/config"
import { accessTokenResponse } from "mocks/data"
import { mockAccessTokenResponse } from "mocks/server"

describe("AccessTokenService", () => {
  it("fetches access tokens", async () => {
    const accessTokenService = new AccessTokenService(vippsConfig)

    const response: Partial<AccessTokenResponse> = {
      access_token: "some-token",
    }

    mockAccessTokenResponse(response)

    const actual = await accessTokenService.fetchAccessToken()

    expect(actual.access_token).toEqual(response.access_token)
  })

  it("caches access tokens", async () => {
    const accessTokenService = new AccessTokenService(vippsConfig)

    const shouldBeCached: Partial<AccessTokenResponse> = {
      access_token: "this-should-be-cached",
    }

    const shouldNotBeCached: Partial<AccessTokenResponse> = {
      access_token: "this-should-not-be-cached",
    }

    mockAccessTokenResponse(shouldBeCached)

    await accessTokenService.fetchAccessToken()

    mockAccessTokenResponse(shouldNotBeCached)

    const response = await accessTokenService.fetchAccessToken()

    expect(response.access_token).toEqual(shouldBeCached.access_token)
  })

  it("fetches fresh access tokens when cache is stale", async () => {
    const staleToken: Partial<AccessTokenResponse> = {
      access_token: "not-expected",
      expires_on: "2020-01-01",
    }

    const expected: Partial<AccessTokenResponse> = {
      access_token: "expected",
    }

    const accessTokenService = new AccessTokenService(vippsConfig)

    mockAccessTokenResponse(staleToken)

    await accessTokenService.fetchAccessToken()

    mockAccessTokenResponse(expected)

    const response = await accessTokenService.fetchAccessToken()

    expect(response.access_token).toEqual(expected.access_token)
  })

  it("determines when a token has expired", () => {
    const expiredToken = accessTokenResponse({ expires_on: "2020-01-01" })
    const activeToken = accessTokenResponse({
      expires_on: dayjs().add(1, "day").toDate().getTime().toString(),
    })

    const accessTokenService = new AccessTokenService(vippsConfig)

    expect(accessTokenService.hasExpired(expiredToken)).toBe(true)
    expect(accessTokenService.hasExpired(activeToken)).toBe(false)
  })
})
