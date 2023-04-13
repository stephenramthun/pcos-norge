import { NextApiRequest, NextApiResponse } from "next"

import { validateAuthorization } from "auth/index"
import { VippsConfig } from "config/vipps"
import { AgreementService } from "io/vipps/agreementService"
import { ChargeService } from "io/vipps/chargeService"

const WAIT_MS = 5000

const agreementService = new AgreementService(VippsConfig)
const chargeService = new ChargeService(VippsConfig)

export default async function updateAgreement(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).end("Method Not Allowed")
  }

  if (!validateAuthorization(req, res)) {
    return res.end()
  }

  const agreementId = req.query.agreementId as string

  const agreement = await agreementService.getAgreement(agreementId)

  if (!agreement) {
    res.status(500).send("Failed to fetch agreement from Vipps")
    return res.end()
  }

  await agreementService.updateAgreement(agreement)

  if (agreement.status === "PENDING") {
    await new Promise((resolve) => setTimeout(resolve, WAIT_MS))
    agreementService.pollAgreementStatus(
      agreementId,
      req.body.chargeId,
      req.body.tries + 1,
    )
  } else if (agreement.status === "ACTIVE") {
    chargeService.pollChargeCapture(agreementId, req.body.chargeId)
  }

  return res.end()
}
