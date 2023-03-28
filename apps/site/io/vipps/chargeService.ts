import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"
import { FailedCaptureError, FailedFetchingCharges } from "io/vipps/errors"
import { getReservedAgreements } from "db/prisma/dao/agreement"

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
      throw new FailedFetchingCharges(agreementId)
    }

    return response.json()
  }

  captureCharge = async (
    agreementId: string,
    chargeId: string,
    amount: number,
    description = "Årsmedlemskap i PCOS Norge",
  ): Promise<number> => {
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
      throw new FailedCaptureError(agreementId)
    }

    return response.status
  }

  captureReservedAgreements = async (): Promise<void> => {
    console.log("Fetching reserved agreements from db")
    const reservedAgreements = await getReservedAgreements()
    console.log("Done fetching reserved agreements from db")

    for (const agreement of reservedAgreements) {
      try {
        console.log("Getting charges for agreement", agreement.id)
        const charges = await this.getCharges(agreement.id)
        console.log("Done getting charges for agreement")
        for (const charge of charges) {
          console.log("Attempting to capture charge", charge)
          if (charge.status === "RESERVED") {
            console.log("Capturing charge")
            this.captureCharge(agreement.id, charge.id, charge.amount).catch(
              (e) => {
                if (e instanceof FailedCaptureError) {
                  console.error(e.message)
                }
              },
            )
          }
        }
      } catch (e) {
        if (e instanceof FailedFetchingCharges) {
          console.error(e.message)
        }
      }
    }
  }
}
