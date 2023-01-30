const requireValue = (key: string): string => {
  return (
    process.env[key] ??
    (() => {
      throw Error(`Missing environment variable: ${key}`)
    })()
  )
}

export const VippsConfig = {
  clientId: requireValue("VIPPS_CLIENT_ID"),
  clientSecret: requireValue("VIPPS_CLIENT_SECRET"),
  accessTokenEndpoint: requireValue("VIPPS_ACCESSTOKEN_ENDPOINT"),
  recurringPaymentEndpoint: requireValue("VIPPS_RECURRING_PAYMENT_ENDPOINT"),
  wellKnown: requireValue("VIPPS_WELL_KNOWN_URI"),
  redirectUri: requireValue("VIPPS_REDIRECT_URI"),
  userInfoEndpoint: requireValue("VIPPS_USERINFO_ENDPOINT"),
  merchantSerialNumber: requireValue("VIPPS_MERCHANT_SERIAL_NUMBER"),
  subscriptionKey: requireValue("VIPPS_SUBSCRIPTION_KEY"),
  registerRedirectUri: requireValue("VIPPS_REGISTER_REDIRECT_URI"),
}
