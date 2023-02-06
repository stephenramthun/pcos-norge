import { VippsConfig } from "config/vipps"
import { nanoid } from "nanoid"

type Headers = {
  [header: string]: string
}

export class HeadersBuilder {
  protected headers: Headers = {}

  commonHeaders(accessToken: string): HeadersBuilder {
    this.headers["Authorization"] = `Bearer ${accessToken}`
    this.headers["Content-Type"] = "application/json"
    this.headers["Ocp-Apim-Subscription-Key"] = VippsConfig.subscriptionKey
    this.headers["Merchant-Serial-Number"] = VippsConfig.merchantSerialNumber
    return this
  }

  idempotency(): HeadersBuilder {
    this.headers["Idempotency-Key"] = nanoid()
    return this
  }

  build(): Headers {
    return this.headers
  }
}
