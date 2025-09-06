import crypto from "crypto"

import { NextApiRequest, NextApiResponse } from "next"

const requireEnv = (key: string): string => {
  const value = process.env[key]

  if (!value) {
    throw Error(`Missing env variable with key ${key}`)
  }

  return value
}

const validateMethod = (req: NextApiRequest, res: NextApiResponse): boolean => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
    return false
  }
  return true
}

const validateAuthorization = (
  req: NextApiRequest,
  res: NextApiResponse,
): boolean => {
  if (process.env.NODE_ENV === "development") {
    return true
  }
  try {
    const secret = requireEnv("RECURRING_AGREEMENT_WEBHOOK_SECRET")
    const body = req.body

    console.log("Webhook body:", body)
    console.log("Webhook body type:", typeof body)

    const expectedContentHash = crypto
      .createHash("sha256")
      .update(JSON.stringify(body))
      .digest("base64")
    const actualContentHash = req.headers["X-Ms-Content-Sha256"]

    if (expectedContentHash !== actualContentHash) {
      console.error(
        `Actual content hash ${actualContentHash} does not match expected hash ${expectedContentHash}`,
      )
      res.status(401).json({ success: false })
      res.end()
      return false
    }

    const pathAndQuery =
      "/api/vipps/webhooks/agreement" +
      (Object.keys(req.query).length > 0
        ? "?" +
          new URLSearchParams(req.query as Record<string, string>).toString()
        : "")

    const expectedSignedString =
      `${req.method}\n` +
      `${pathAndQuery}\n` +
      `${req.headers["X-Ms-Date"]};${req.headers["Host"]};${req.headers["X-Ms-Content-Sha256"]}`

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(expectedSignedString)
      .digest("base64")

    const expectedAuth = `HMAC-SHA256 SignedHeaders=x-ms-date;host;x-ms-content-sha256&Signature=${expectedSignature}`

    if (req.headers.authorization !== expectedAuth) {
      console.error(
        `Actual auth ${req.headers.authorization} does not match expected auth: ${expectedAuth}`,
      )
      res.status(401).json({ success: false })
      res.end()
      return false
    }
  } catch (err) {
    console.error("Unknown error:", err)
    res.status(500).json({ statusCode: 500, message: (err as Error)?.message })
    res.end()
    return false
  }
  return true
}

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
