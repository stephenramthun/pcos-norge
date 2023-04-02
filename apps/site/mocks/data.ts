import { AccessTokenResponse } from "io/vipps/accessTokenService"
import { vippsConfig } from "mocks/config"

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

export const agreementRequest = (
  overrides?: Partial<AgreementRequestBody>,
): AgreementRequestBody => ({
  interval: {
    unit: "YEAR",
    count: 1,
  },
  initialCharge: {
    amount: 20000,
    description: "Medlemskap PCOS Norge, 1 år",
    transactionType: "RESERVE_CAPTURE",
  },
  pricing: {
    type: "LEGACY",
    amount: 20000,
    currency: "NOK",
  },
  merchantRedirectUrl: vippsConfig.registerRedirectUri,
  merchantAgreementUrl: vippsConfig.registerRedirectUri,
  productName: "Medlemskap PCOS Norge, 1 år",
  ...overrides,
})

export const agreementResponse = (
  overrides?: Partial<AgreementResponseBody>,
): AgreementResponseBody => ({
  vippsConfirmationUrl: "http://localhost:4000/api/vipps/confirmation/url",
  agreementId: "agreement-id",
  chargeId: "charge-id",
  ...overrides,
})

export const agreement = (overrides?: Partial<Agreement>): Agreement => ({
  id: "some-agreement-id",
  status: "ACTIVE",
  start: "2020-01-01",
  stop: "2021-01-01",
  ...overrides,
})
