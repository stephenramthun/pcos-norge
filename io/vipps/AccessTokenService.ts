import { VippsConfig } from "@config/vipps"

type Seconds = string
type UnixDate = string
type JWT = string

type AccessTokenResponse = {
  token_type: "Bearer"
  expires_in: Seconds
  ext_epires_in: Seconds
  expires_on: UnixDate
  not_before: UnixDate
  resource: string
  access_token: JWT
}

export const AccessTokenService = {
  async fetchAccessToken(): Promise<AccessTokenResponse> {
    const response = await fetch(VippsConfig.accessTokenEndpoint, {
      method: "POST",
      headers: {
        client_id: VippsConfig.clientId,
        client_secret: VippsConfig.clientSecret,
        "Ocp-Apim-Subscription-Key": VippsConfig.subscriptionKey,
        "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
      },
    })

    return response.json()
  },
}
