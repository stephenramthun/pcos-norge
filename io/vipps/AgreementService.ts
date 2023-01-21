import { AccessTokenService } from "@io/vipps/AccessTokenService"
import { VippsConfig } from "@config/vipps"
import { nanoid } from "nanoid"

type NewAgreementResponse = {
  vippsConfirmationUrl: string
  agreementId: string
  chargeId: string | null
}

export const AgreementService = {
  async newAgreement(): Promise<NewAgreementResponse> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(VippsConfig.recurringPaymentEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
        "Ocp-Apim-Subscription-Key": VippsConfig.subscriptionKey,
        "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
        "Idempotency-Key": nanoid(),
      },
      body: JSON.stringify({
        interval: {
          unit: "YEAR",
          count: 1,
        },
        pricing: {
          type: "LEGACY",
          amount: 20000,
          currency: "NOK",
        },
        merchantRedirectUrl: VippsConfig.registerRedirectUri,
        merchantAgreementUrl: VippsConfig.registerRedirectUri,
        productName: "Medlemskap PCOS Norge, 1 år",
      }),
    })

    const res = await response.json()

    if (res.status >= 400) {
      throw Error(`${res.status}, ${res.detail}`)
    }

    return res
  },

  async getAgreements() {
    const url = new URL(VippsConfig.recurringPaymentEndpoint)
    const params = new URLSearchParams({
      status: "ACTIVE",
      createdAfter: "0",
    })
    url.search = params.toString()

    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
        "Ocp-Apim-Subscription-Key": VippsConfig.subscriptionKey,
        "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
      },
    })

    console.log(await response.json())
  },
}
