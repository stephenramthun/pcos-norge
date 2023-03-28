import { HeadersBuilder } from "io/vipps/headersBuilder"
import { vippsConfig } from "mocks/config"

describe("headerBuilder", () => {
  it("adds common headers", () => {
    const accessToken = "acoqn203cn2c0n"
    const headers = new HeadersBuilder(vippsConfig)
      .commonHeaders(accessToken)
      .build()

    expect(headers.Authorization).toEqual(`Bearer ${accessToken}`)
    expect(headers["Content-Type"]).toEqual(`application/json`)
    expect(headers["Ocp-Apim-Subscription-Key"]).toEqual(
      vippsConfig.subscriptionKey,
    )
    expect(headers["Merchant-Serial-Number"]).toEqual(
      vippsConfig.merchantSerialNumber,
    )
  })

  it("adds idempotency header", () => {
    const headers = new HeadersBuilder(vippsConfig).idempotency().build()

    expect(typeof headers["Idempotency-Key"]).toEqual("string")
    expect(headers["Idempotency-Key"].length).toBeGreaterThan(0)
  })
})
