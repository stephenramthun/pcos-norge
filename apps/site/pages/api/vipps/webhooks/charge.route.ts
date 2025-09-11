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

      // await agreementService.updateAgreement({
      //   id: payload.agreementId,
      //   status: "ACTIVE",
      //   paidDate: new Date(),
      // })

      console.log(
        `Reserved charge ${payload.chargeId} for agreement ${payload.agreementId}`,
      )
      // console.log("Set agreement status to ACTIVE")
      break
    }
    case "recurring.charge-captured.v1":
      // Innbetalingen var vellykket. Ikke så mye å gjøre her med mindre vi ikke oppdaterer status i reservert-steget
      console.log("charge captured")
      break
    case "recurring.charge-canceled.v1":
      // Noen har avbrutt en betaling. Dette betyr mest sannsynlig at vedkommende ikke ønsker å være medlem lenger.
      // Her bør vi oppdatere status til "STOPPED" og samtidig sende en utmeldingsepost til vedkommende.
      console.log("charge cancelled")
      break
    case "recurring.charge-refunded.v1":
      // Denne bør i praksis aldri skje. Det kan være at vi velger å manuelt refundere noen, men da vil vi ikke
      // nødvendigvis gjøre noe her.
      console.log("charge refunded")
      break
    case "recurring.charge-failed.v1":
      // Innbetalingen feilet. Dette kan være flere grunner til, men her er det usikkert om vedkommende ønsker å fortsatt
      // være medlem. Her kan vi f.eks. pause medlemskapet til vedkommende og sende en epost som forklarer situasjonen og
      // be vedkommende om å betale kontingenten om de ønsker å fortsatt være medlem. Kanskje prøve igjen 2-3 ganger før vi gjør dette
      console.log("charge failed")
      break
    case "recurring.charge-creation-failed.v1":
      // Denne bør nok i praksis aldri skje. Da er det mest sannsynlig snakk om teknisk feil hos Vipps.
      console.log("charge creation failed")
      break
  }

  console.log("Webhook payload:", req.body)

  return res.end()
}
