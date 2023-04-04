import { HeadersBuilder } from "io/vipps/headersBuilder"
import { AccessTokenService } from "io/vipps/accessTokenService"
import { CapturingChargeError, FetchingChargesError } from "io/vipps/errors"
import { getUnpaidAgreements, updatePaidDate } from "db/prisma/dao/agreement"

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

  chargeUnpaidAgreements = async (): Promise<void> => {
    const unpaidAgreements = await getUnpaidAgreements()

    for (const agreement of unpaidAgreements) {
      try {
        const charges = await this.getCharges(agreement.id)
        for (const charge of charges) {
          if (charge.status === "CHARGED") {
            const captureEvent = charge.history.find(
              ({ event }) => event === "CAPTURE",
            )
            const chargedDate = captureEvent
              ? new Date(captureEvent.occurred)
              : new Date()
            await updatePaidDate(agreement.id, chargedDate)
            continue
          }
          if (charge.status === "RESERVED") {
            await this.captureCharge(agreement.id, charge.id, charge.amount)
              .then((response) => {
                if (response.ok) {
                  return updatePaidDate(agreement.id)
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

  pollChargeCapture = async (
    agreementId: string,
    chargeId: string,
    tries = 0,
    limit = 10,
    waitMs = 500,
  ): Promise<Response> => {
    const charge = await this.getCharges(agreementId).then((charges) =>
      charges.find((it) => it.id === chargeId),
    )

    if (!charge) {
      throw Error(
        `Couldn't find charge with id ${chargeId} for agreement with id ${agreementId}`,
      )
    }

    if (charge.status === "RESERVED") {
      const response = await this.captureCharge(
        agreementId,
        charge.id,
        charge.amount,
      )

      if (response.ok) {
        updatePaidDate(agreementId)
      }

      return response
    }

    await new Promise((resolve) => setTimeout(resolve, waitMs))

    return this.pollChargeCapture(agreementId, charge.id, tries + 1, limit)
  }
}
