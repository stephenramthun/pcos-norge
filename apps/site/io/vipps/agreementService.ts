import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"
import { getAgreementForUser, updateAgreement } from "db/prisma/dao/agreement"
import {
  FetchingAgreementError,
  PostingAgreementError,
  StoppingAgreementError,
} from "io/vipps/errors"

const createAgreement = (
  config: VippsConfigObject,
  amount = 20000,
  description = "Medlemskap PCOS Norge, 1 år",
): AgreementRequestBody => ({
  interval: {
    unit: "YEAR",
    count: 1,
  },
  initialCharge: {
    amount,
    description,
    transactionType: "RESERVE_CAPTURE",
  },
  pricing: {
    type: "LEGACY",
    amount,
    currency: "NOK",
  },
  merchantRedirectUrl: config.registerRedirectUri,
  merchantAgreementUrl: config.registerRedirectUri,
  productName: description,
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

    if (!response.ok) {
      const { details, status } = await response.json()
      throw new PostingAgreementError(details, status)
    }

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

    if (!response.ok) {
      const { details, status } = await response.json()
      throw new FetchingAgreementError(id, details, status)
    }

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

    if (!response.ok) {
      throw new StoppingAgreementError(id, response.status)
    }

    return response.status
  }

  updateAgreementForUser = async (
    userId: string,
  ): Promise<Agreement | null> => {
    return getAgreementForUser(userId)
      .then((agreement) => {
        if (!agreement) {
          throw Error("User is missing agreement")
        }
        return this.getAgreement(agreement.id)
      })
      .then(({ id, status, stop, start }) =>
        updateAgreement(id, status, start, stop),
      )
      .catch(() => {
        // Log error?
        return null
      })
  }
}
