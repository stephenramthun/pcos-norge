import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"
import { CapturingChargeError, FetchingChargesError } from "io/vipps/errors"
import {
  getReservedAgreements,
  updatePaymentStatus,
} from "db/prisma/dao/agreement"

export class ChargeService {
  private readonly config: VippsConfigObject
  private accessTokenService: AccessTokenService

  constructor(config: VippsConfigObject) {
    this.config = config
    this.accessTokenService = new AccessTokenService(config)
  }

  getCharges = async (agreementId: string): Promise<ChargeResponseBody[]> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(
      `${this.config.recurringPaymentEndpoint}/${agreementId}/charges`,
      {
        method: "GET",
        headers: new HeadersBuilder(this.config)
          .commonHeaders(access_token)
          .idempotency()
          .build(),
      },
    )
    if (!response.ok) {
      throw new FetchingChargesError(agreementId)
    }

    return response.json()
  }

  captureCharge = async (
    agreementId: string,
    chargeId: string,
    amount: number,
    description = "Årsmedlemskap i PCOS Norge",
  ): Promise<Response> => {
    const { access_token } = await this.accessTokenService.fetchAccessToken()
    const response = await fetch(
      `${this.config.recurringPaymentEndpoint}/${agreementId}/charges/${chargeId}/capture`,
      {
        method: "POST",
        headers: new HeadersBuilder(this.config)
          .commonHeaders(access_token)
          .idempotency()
          .build(),
        body: JSON.stringify({
          amount,
          description,
        }),
      },
    )
    if (!response.ok) {
      throw new CapturingChargeError(agreementId)
    }

    return response
  }

  captureReservedAgreements = async (): Promise<void> => {
    const reservedAgreements = await getReservedAgreements()

    for (const agreement of reservedAgreements) {
      try {
        const charges = await this.getCharges(agreement.id)
        for (const charge of charges) {
          if (charge.status === "CHARGED") {
            updatePaymentStatus(agreement.id, "CHARGED")
            continue
          }
          if (charge.status === "RESERVED") {
            this.captureCharge(agreement.id, charge.id, charge.amount)
              .then((response) => {
                if (response.ok) {
                  updatePaymentStatus(agreement.id, "CHARGED")
                }
              })
              .catch((e) => {
                if (e instanceof CapturingChargeError) {
                  console.error(e.message)
                }
              })
          }
        }
      } catch (e) {
        if (e instanceof FetchingChargesError) {
          console.error(e.message)
        }
      }
    }
  }
}
