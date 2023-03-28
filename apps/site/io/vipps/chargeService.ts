import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"

const createCharge = (due: string): ChargeRequestBody => ({
  amount: 20000,
  description: "Medlemskap PCOS Norge, 1 år",
  transactionType: "DIRECT_CAPTURE",
  due: due,
  retryDays: 14,
})

export class ChargeService {
  private readonly config: VippsConfigObject
  private accessTokenService: AccessTokenService

  constructor(config: VippsConfigObject) {
    this.config = config
    this.accessTokenService = new AccessTokenService(config)
  }

  createCharge = async (
    agreementId: string,
    due: string,
  ): Promise<ChargeResponseBody> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(
      `${this.config.recurringPaymentEndpoint}/${agreementId}/charges`,
      {
        method: "POST",
        headers: new HeadersBuilder(this.config)
          .commonHeaders(access_token)
          .idempotency()
          .build(),
        body: JSON.stringify(createCharge(due)),
      },
    )
    return await response.json()
  }
}
