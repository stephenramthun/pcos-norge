import { NextApiRequest, NextApiResponse } from "next"
import { ChargeService } from "io/vipps/chargeService"
import { VippsConfig } from "config/vipps"

const chargeService = new ChargeService(VippsConfig)

export default async function capture(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }

  try {
    const { authorization } = req.headers
    if (authorization !== `Bearer ${process.env.VIPPS_CLIENT_SECRET}`) {
      res.status(401).json({ success: false })
      return res.end()
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as Error)?.message })
    return res.end()
  }

  chargeService.captureReservedAgreements()

  return res
}
