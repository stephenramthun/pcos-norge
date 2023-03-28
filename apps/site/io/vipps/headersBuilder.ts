import { nanoid } from "nanoid"

type Headers = {
  [header: string]: string
}

export class HeadersBuilder {
  protected headers: Headers = {}
  private config: VippsConfigObject

  constructor(config: VippsConfigObject) {
    this.config = config
  }

  commonHeaders(accessToken: string): HeadersBuilder {
    this.headers["Authorization"] = `Bearer ${accessToken}`
    this.headers["Content-Type"] = "application/json"
    this.headers["Ocp-Apim-Subscription-Key"] = this.config.subscriptionKey
    this.headers["Merchant-Serial-Number"] = this.config.merchantSerialNumber
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
