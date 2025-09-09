import { NextApiRequest, NextApiResponse } from "next"

import { validateAuthorization, validateMethod } from "./validation"

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

  if (!validateAuthorization(req, res)) {
    return res.end()
  }

  const payload = req.body as AgreementEventPayload

  // Handle received agreement webhook
  switch (payload.eventType) {
    case "recurring.agreement-activated.v1": {
      console.log("Received agreement activated webhook")
      break
    }
    case "recurring.agreement-rejected.v1": {
      console.log("Received agreement rejected webhook")
      break
    }
    case "recurring.agreement-stopped.v1": {
      console.log("Received agreement stopped webhook")
      break
    }
    case "recurring.agreement-expired.v1": {
      console.log("Received agreement expired webhook")
      break
    }
  }

  console.log("Webhook payload:", req.body)

  return res.end()
}
