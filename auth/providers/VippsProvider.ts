import { Provider } from "next-auth/providers"
import { nanoid } from "nanoid"

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

export const requireValue = (key: string): string => {
  return (
    process.env[key] ??
    (() => {
      throw Error(`Missing environment variable: ${key}`)
    })()
  )
}

export const VippsProvider: Provider = {
  id: "vipps",
  name: "Vipps",
  type: "oauth",
  clientId: requireValue("VIPPS_CLIENT_ID"),
  clientSecret: requireValue("VIPPS_CLIENT_SECRET"),
  wellKnown: requireValue("VIPPS_WELL_KNOWN_URI"),
  authorization: {
    params: {
      client_id: requireValue("VIPPS_CLIENT_ID"),
      scope: "openid name phoneNumber address birthDate email",
      state: nanoid(),
      response_type: "code",
      redirect_uri: requireValue("VIPPS_REDIRECT_URI"),
    },
  },
  idToken: true,
  checks: ["state"],
  userinfo: {
    url: requireValue("VIPPS_USERINFO_ENDPOINT"),
    async request(context) {
      const response = await fetch(requireValue("VIPPS_USERINFO_ENDPOINT"), {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token}`,
          "Merchant-Serial-Number": requireValue(
            "VIPPS_MERCHANT_SERIAL_NUMBER",
          ),
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
