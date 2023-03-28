import { VippsConfig } from "config/vipps"

type Seconds = string
type UnixDate = string
type JWT = string

export type AccessTokenResponse = {
  token_type: "Bearer"
  expires_in: Seconds
  ext_epires_in: Seconds
  expires_on: UnixDate
  not_before: UnixDate
  resource: string
  access_token: JWT
}

export class AccessTokenService {
  cache: AccessTokenResponse | null = null

  private config: typeof VippsConfig

  constructor(config: typeof VippsConfig) {
    this.config = config
  }

  async fetchAccessToken(): Promise<AccessTokenResponse> {
    if (this.cache && !this.hasExpired(this.cache)) {
      return this.cache
    }
    const response = await fetch(this.config.accessTokenEndpoint, {
      method: "POST",
      headers: {
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        "Ocp-Apim-Subscription-Key": this.config.subscriptionKey,
        "Merchant-Serial-Number": this.config.merchantSerialNumber,
      },
    })
    const data = await response.json()
    this.cache = data
    return data
  }

  hasExpired(tokenResponse: AccessTokenResponse): boolean {
    return (
      new Date().getTime() - new Date(tokenResponse.expires_on).getTime() > 0
    )
  }
}
