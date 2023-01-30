import fetchMock from "jest-fetch-mock"
import dayjs from "dayjs"
import {
  AccessTokenResponse,
  AccessTokenService,
} from "io/vipps/accessTokenService"

const tokenResponse = (
  overrides?: Partial<AccessTokenResponse>,
): AccessTokenResponse => ({
  token_type: "Bearer",
  expires_in: "3599",
  ext_epires_in: "3599",
  expires_on: new Date().getTime().toString(),
  not_before: new Date().getTime().toString(),
  resource: "",
  access_token: "",
  ...overrides,
})

describe("AccessTokenService", () => {
  afterEach(() => {
    fetchMock.mockClear()
    AccessTokenService.cache = null
  })

  it("fetches access tokens", async () => {
    const response = tokenResponse()
    fetchMock.mockResponse(() =>
      Promise.resolve({ body: JSON.stringify(response) }),
    )

    expect(await AccessTokenService.fetchAccessToken()).toEqual(response)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it("caches access tokens", async () => {
    fetchMock.mockResponse(() =>
      Promise.resolve({ body: JSON.stringify(tokenResponse()) }),
    )

    await AccessTokenService.fetchAccessToken()
    await AccessTokenService.fetchAccessToken()
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it("fetches fresh access tokens when cache is stale", async () => {
    fetchMock.mockResponse(() =>
      Promise.resolve({
        body: JSON.stringify(tokenResponse({ expires_on: "2020-01-01" })),
      }),
    )

    await AccessTokenService.fetchAccessToken()
    await AccessTokenService.fetchAccessToken()
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it("hasExpired", () => {
    const expiredToken = tokenResponse({ expires_on: "2020-01-01" })
    const activeToken = tokenResponse({
      expires_on: dayjs().add(1, "day").toDate().getTime().toString(),
    })

    expect(AccessTokenService.hasExpired(expiredToken)).toBe(true)
    expect(AccessTokenService.hasExpired(activeToken)).toBe(false)
  })
})
