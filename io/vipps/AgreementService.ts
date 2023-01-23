import { AccessTokenService } from "@io/vipps/AccessTokenService"
import { VippsConfig } from "@config/vipps"
import { nanoid } from "nanoid"

type NewAgreementResponse = {
  vippsConfirmationUrl: string
  agreementId: string
  chargeId: string | null
}

type Agreement = {
  status: "ACTIVE" | "PENDING" | "EXPIRED" | "STOPPED"
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

  async getAgreement(id: string): Promise<Agreement> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(
      `${VippsConfig.recurringPaymentEndpoint}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
          "Ocp-Apim-Subscription-Key": VippsConfig.subscriptionKey,
          "Merchant-Serial-Number": VippsConfig.merchantSerialNumber,
        },
      },
    )

    return await response.json()
  },
}
