import { NextApiRequest, NextApiResponse } from "next"

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
  eventType: ChargeEvent
  occurred: string
}

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
    case "recurring.charge-reserved.v1":
      console.log("charge reserver")
      break
    case "recurring.charge-captured.v1":
      console.log("charge captured")
      break
    case "recurring.charge-canceled.v1":
      console.log("charge cancelled")
      break
    case "recurring.charge-refunded.v1":
      console.log("charge refunded")
      break
    case "recurring.charge-failed.v1":
      console.log("charge failed")
      break
    case "recurring.charge-creation-failed.v1":
      console.log("charge creation failed")
      break
  }

  console.log("Webhook payload:", req.body)

  return res.end()
}
