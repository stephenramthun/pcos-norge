import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"

const createAgreement = (config: VippsConfigObject): AgreementRequestBody => ({
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
  merchantRedirectUrl: config.registerRedirectUri,
  merchantAgreementUrl: config.registerRedirectUri,
  productName: "Medlemskap PCOS Norge, 1 år",
})

export class AgreementService {
  private readonly config: VippsConfigObject
  private accessTokenService: AccessTokenService

  constructor(config: VippsConfigObject) {
    this.config = config
    this.accessTokenService = new AccessTokenService(config)
  }

  newAgreement = async (): Promise<AgreementResponseBody> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(this.config.recurringPaymentEndpoint, {
      method: "POST",
      headers: new HeadersBuilder(this.config)
        .commonHeaders(access_token)
        .idempotency()
        .build(),
      body: JSON.stringify(createAgreement(this.config)),
    })
    return await response.json()
  }

  getAgreement = async (id: string): Promise<Agreement> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(
      `${this.config.recurringPaymentEndpoint}/${id}`,
      {
        method: "GET",
        headers: new HeadersBuilder(this.config)
          .commonHeaders(access_token)
          .build(),
      },
    )
    return await response.json()
  }

  stopAgreement = async (id: string): Promise<number> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(
      `${this.config.recurringPaymentEndpoint}/${id}`,
      {
        method: "PATCH",
        headers: new HeadersBuilder(this.config)
          .commonHeaders(access_token)
          .idempotency()
          .build(),
        body: JSON.stringify({ status: "STOPPED" }),
      },
    )
    return response.status
  }
}
