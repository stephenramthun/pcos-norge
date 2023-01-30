import { VippsConfig } from "config/vipps"
import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"

type Charge = {
  amount: number
  description: string
  transactionType: "DIRECT_CAPTURE" | "RESERVE_CAPTURE"
  due: string
  retryDays: number
}

const createCharge = (due: string): Charge => ({
  amount: 20000,
  description: "Medlemskap PCOS Norge, 1 år",
  transactionType: "DIRECT_CAPTURE",
  due: due,
  retryDays: 14,
})

export const ChargeService = {
  async createCharge(agreementId: string, due: string): Promise<void> {
    const { access_token } = await AccessTokenService.fetchAccessToken()
    const response = await fetch(
      `${VippsConfig.recurringPaymentEndpoint}/${agreementId}/charges`,
      {
        method: "POST",
        headers: new HeadersBuilder()
          .commonHeaders(access_token)
          .idempotency()
          .build(),
        body: JSON.stringify(createCharge(due)),
      },
    )
    return await response.json()
  },
}
