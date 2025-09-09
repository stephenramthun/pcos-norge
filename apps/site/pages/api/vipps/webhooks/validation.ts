import crypto from "crypto"

import { NextApiRequest, NextApiResponse } from "next"

const requireEnv = (key: string): string => {
  const value = process.env[key]

  if (!value) {
    throw Error(`Missing env variable with key ${key}`)
  }

  return value
}

export const validateMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
): boolean => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
    return false
  }
  return true
}

export const validateAuthorization = (
  req: NextApiRequest,
  res: NextApiResponse,
): boolean => {
  if (process.env.NODE_ENV === "development") {
    return true
  }
  try {
    const secret = requireEnv("RECURRING_AGREEMENT_WEBHOOK_SECRET")
    const body = req.body

    const expectedContentHash = crypto
      .createHash("sha256")
      .update(JSON.stringify(body))
      .digest("base64")
    const actualContentHash = req.headers["x-ms-content-sha256"]

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
      `${req.headers["x-ms-date"]};${req.headers["host"]};${req.headers["x-ms-content-sha256"]}`

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
