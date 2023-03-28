import { AccessTokenResponse } from "io/vipps/accessTokenService"

export const accessTokenResponse = (
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
