import { NextApiRequest, NextApiResponse } from "next"
import { ChargeService } from "io/vipps/chargeService"
import { VippsConfig } from "config/vipps"
import { validateAuthorization } from "auth/index"

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

const chargeService = new ChargeService(VippsConfig)

export default async function capture(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (!validateMethod(req, res) || !validateAuthorization(req, res)) {
    return res.status(400).end()
  }

  await chargeService.chargeUnpaidAgreements()

  return res.end()
}
