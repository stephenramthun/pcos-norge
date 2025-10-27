import { NextApiRequest, NextApiResponse } from "next"

import { requireEnv, validateAuthorization, validateMethod } from "./validation"

type AgreementEvent =
  | "recurring.agreement-activated.v1"
  | "recurring.agreement-rejected.v1"
  | "recurring.agreement-stopped.v1"
  | "recurring.agreement-expired.v1"

type AgreementEventPayload = {
  agreementId: string
  eventType: AgreementEvent
  occurred: string
}

export default async function receiveAgreementWebhook(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (!validateMethod(req, res)) {
    return res.end()
  }

  const secret = requireEnv("RECURRING_AGREEMENT_WEBHOOK_SECRET")
  if (!validateAuthorization(req, res, secret, "agreement")) {
    return res.end()
  }

  const payload = req.body as AgreementEventPayload

  // Handle received agreement webhook
  switch (payload.eventType) {
    case "recurring.agreement-activated.v1": {
      console.log("Received agreement activated webhook")
      // Vi oppdaterer status på avtalen med charge-webhooken, så trenger ikke
      // gjøre noe her
      break
    }
    case "recurring.agreement-rejected.v1": {
      console.log("Received agreement rejected webhook")
      // Ikke spesielt mye vi kan gjøre her. Kanskje sette status til STOPPED?
      // Tipper status i våre systemer er PENDING på dette tidspunktet.
      break
    }
    case "recurring.agreement-stopped.v1": {
      console.log("Received agreement stopped webhook")
      // TODO:
      //  Sjekk i databasen vår. Om bruker fortsatt er registrert som aktiv
      //  sender vi ut en epost om at dersom vedkommende ønsker å melde seg ut
      //  må dette gjøres på min-side
      //  Dersom vedkommende har status STOPPED gjør vi ingenting. Kan vurdere
      //  å sende ut en utmeldingsepost for å bekrefte at vi har mottatt
      //  utmeldingen
      break
    }
    case "recurring.agreement-expired.v1": {
      console.log("Received agreement expired webhook")
      // Vet ikke helt hva vi skal gjøre her
      break
    }
  }

  console.log("Webhook payload:", req.body)

  return res.end()
}
