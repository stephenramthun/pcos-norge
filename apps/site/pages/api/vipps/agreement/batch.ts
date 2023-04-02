import { NextApiRequest, NextApiResponse } from "next"
import { validateAuthorization } from "auth/index"
import { validateMethod } from "../capture"
import { AgreementService } from "io/vipps/agreementService"
import { VippsConfig } from "config/vipps"

const agreementService = new AgreementService(VippsConfig)

export default async function batch(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  if (!validateMethod(req, res) || !validateAuthorization(req, res)) {
    return res.status(400).end()
  }

  await agreementService.updatePendingAgreements()

  return res
}
