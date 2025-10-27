import { NextApiRequest, NextApiResponse } from "next"

import { VippsConfig } from "config/vipps"
import { AgreementService } from "io/vipps/agreementService"
import { ChargeService } from "io/vipps/chargeService"

import { requireEnv, validateAuthorization, validateMethod } from "./validation"

type ChargeEvent =
  | "recurring.charge-reserved.v1"
  | "recurring.charge-captured.v1"
  | "recurring.charge-canceled.v1"
  | "recurring.charge-refunded.v1"
  | "recurring.charge-failed.v1"
  | "recurring.charge-creation-failed.v1"

type ChargeEventPayload = {
  agreementId: string
  chargeId: string
  amount: number
  eventType: ChargeEvent
  occurred: string
}

const chargeService = new ChargeService(VippsConfig)
const agreementService = new AgreementService(VippsConfig)

export default async function receiveChargeWebhook(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (!validateMethod(req, res)) {
    return res.end()
  }

  const secret = requireEnv("RECURRING_CHARGE_WEBHOOK_SECRET")
  if (!validateAuthorization(req, res, secret, "charge")) {
    return res.end()
  }

  const payload = req.body as ChargeEventPayload

  // Handle received agreement webhook
  switch (payload.eventType) {
    case "recurring.charge-reserved.v1": {
      // Betalingen er reservert. Prøver å fange den og oppdatere medlemsstatus
      await chargeService.captureCharge(
        payload.agreementId,
        payload.chargeId,
        payload.amount,
      )
      break
    }
    case "recurring.charge-captured.v1":
      // Betalingen var vellykket. Oppdaterer status på medlemskapet til ACTIVE
      await agreementService.updateAgreement({
        id: payload.agreementId,
        status: "ACTIVE",
        paidDate: new Date(),
      })
      console.log(
        `Payment captured for agreement ${payload.agreementId}, setting status to ACTIVE.`,
      )
      break
    case "recurring.charge-canceled.v1":
      // Noen har avbrutt en betaling. Dette betyr mest sannsynlig at vedkommende ikke ønsker å være medlem lenger.
      // Her bør vi oppdatere status til "STOPPED" og samtidig sende en utmeldingsepost til vedkommende.
      await agreementService.updateAgreement({
        id: payload.agreementId,
        status: "STOPPED",
        stop: new Date().toISOString(),
      })

      // TODO: Send epost til den utmeldte

      console.log(
        `Payment cancelled for agreement ${payload.agreementId}, setting status to STOPPED.`,
      )
      break
    case "recurring.charge-refunded.v1":
      // Denne bør i praksis aldri skje. Det kan være at vi velger å manuelt refundere noen, men da vil vi ikke
      // nødvendigvis gjøre noe her.
      console.info(
        `Payment refunded for charge ${payload.chargeId}, amount: ${payload.amount} kr., agreement ${payload.agreementId}.`,
      )
      break
    case "recurring.charge-failed.v1":
      // Innbetalingen feilet. Dette kan være flere grunner til, men her er det usikkert om vedkommende ønsker å fortsatt
      // være medlem. Her kan vi f.eks. pause medlemskapet til vedkommende og sende en epost som forklarer situasjonen og
      // be vedkommende om å betale kontingenten om de ønsker å fortsatt være medlem. Kanskje prøve igjen 2-3 ganger før vi gjør dette
      console.log("Charge failed")
      break
    case "recurring.charge-creation-failed.v1":
      // Denne bør nok i praksis aldri skje. Da er det mest sannsynlig snakk om teknisk feil hos Vipps.
      console.log("Charge creation failed")
      break
  }

  console.log("Charge payload:", req.body)

  return res.end()
}
