export const vippsConfig: VippsConfigObject = {
  clientId: "test-id",
  clientSecret: "test-secret",
  accessTokenEndpoint: "http://localhost:3000/api/test/accessToken",
  recurringPaymentEndpoint: "http://localhost:3000/api/test/recurringPayment",
  userInfoEndpoint: "http://localhost:3000/api/test/userInfo",
  wellKnown: "http://localhost:3000/api/test/wellKnown",
  redirectUri: "http://localhost:3000/min-side",
  registerRedirectUri: "http://localhost:3000/api/vipps/agreement/callback",
  merchantAgreementUri: "http://localhost:3000/min-side",
  merchantSerialNumber: "12345678",
  subscriptionKey: "subscription-key",
}
