import { VippsConfig } from "config/vipps"
import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/AccessTokenService"

type NewAgreementResponse = {
  vippsConfirmationUrl: string
  agreementId: string
  chargeId: string | null
}

type Agreement = {
  status: "ACTIVE" | "PENDING" | "EXPIRED" | "STOPPED"
}

type AgreementBody = {
  interval: {
    unit: "YEAR"
    count: number
  }
  initialCharge: {
    amount: number
    description: string
    transactionType: "DIRECT_CAPTURE" | "RESERVE_CAPTURE"
  }
  pricing: {
    type: "LEGACY"
    amount: number
    currency: "NOK"
  }
  merchantRedirectUrl: string
  merchantAgreementUrl: string
  productName: string
}

const createAgreement = (): AgreementBody => ({
  interval: {
    unit: "YEAR",
    count: 1,
  },
  initialCharge: {
    amount: 20000,
    description: "Medlemskap PCOS Norge, 1 år",
    transactionType: "DIRECT_CAPTURE",
  },
  pricing: {
    type: "LEGACY",
    amount: 20000,
    currency: "NOK",
  },
  merchantRedirectUrl: VippsConfig.registerRedirectUri,
  merchantAgreementUrl: VippsConfig.registerRedirectUri,
  productName: "Medlemskap PCOS Norge, 1 år",
})

export const AgreementService = {
  async newAgreement(): Promise<NewAgreementResponse> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(VippsConfig.recurringPaymentEndpoint, {
      method: "POST",
      headers: new HeadersBuilder()
        .commonHeaders(access_token)
        .idempotency()
        .build(),
      body: JSON.stringify(createAgreement()),
    })
    return await response.json()
  },

  async getAgreement(id: string): Promise<Agreement> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(
      `${VippsConfig.recurringPaymentEndpoint}/${id}`,
      {
        method: "GET",
        headers: new HeadersBuilder().commonHeaders(access_token).build(),
      },
    )
    return await response.json()
  },

  async stopAgreement(id: string): Promise<number> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(
      `${VippsConfig.recurringPaymentEndpoint}/${id}`,
      {
        method: "PATCH",
        headers: new HeadersBuilder()
          .commonHeaders(access_token)
          .idempotency()
          .build(),
        body: JSON.stringify({ status: "STOPPED" }),
      },
    )
    return response.status
  },
}
