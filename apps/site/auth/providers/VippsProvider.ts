import { Provider } from "next-auth/providers"
import { nanoid } from "nanoid"
import { VippsConfig } from "config/vipps"

type VippsUserInfo = {
  address: {
    address_type: string
    country: string
    formatted: string
    postal_code: string
    region: string
    street_address: string
  }
  birtdate: string
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  name: string
  other_addresses: Array<VippsUserInfo["address"]>
  phone_number: string
  sid: string
  sub: string
}

export const VippsProvider: Provider = {
  id: "vipps",
  name: "Vipps",
  type: "oauth",
  clientId: VippsConfig.clientId,
  clientSecret: VippsConfig.clientSecret,
  wellKnown: VippsConfig.wellKnown,
  authorization: {
    params: {
      client_id: VippsConfig.clientId,
      scope: "openid name phoneNumber address birthDate email",
      state: nanoid(),
      response_type: "code",
      redirect_uri: VippsConfig.redirectUri,
    },
  },
  idToken: true,
  checks: ["state"],
  userinfo: {
    url: VippsConfig.userInfoEndpoint,
    async request(context) {
      const response = await fetch(VippsConfig.userInfoEndpoint, {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token}`,
          "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
        },
      })
      const body: VippsUserInfo = await response.json()
      return {
        id: body.sub,
        ...body,
      }
    },
  },
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      emailVerified: profile.email_verified,
      givenName: profile.given_name,
      familyName: profile.family_name,
      birthdate: new Date(profile.birthdate),
      phoneNumber: profile.phone_number,
      country: profile.address.country,
      region: profile.address.region,
      postalCode: profile.address.postal_code,
      streetAddress: profile.address.street_address,
    }
  },
}
