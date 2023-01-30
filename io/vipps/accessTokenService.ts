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
  static cache: AccessTokenResponse | null = null

  static async fetchAccessToken(): Promise<AccessTokenResponse> {
    if (this.cache && !this.hasExpired(this.cache)) {
      return this.cache
    }
    const response = await fetch(VippsConfig.accessTokenEndpoint, {
      method: "POST",
      headers: {
        client_id: VippsConfig.clientId,
        client_secret: VippsConfig.clientSecret,
        "Ocp-Apim-Subscription-Key": VippsConfig.subscriptionKey,
        "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
      },
    })
    const data = await response.json()
    this.cache = data
    return data
  }

  static hasExpired(tokenResponse: AccessTokenResponse): boolean {
    return (
      new Date().getTime() - new Date(tokenResponse.expires_on).getTime() > 0
    )
  }
}
