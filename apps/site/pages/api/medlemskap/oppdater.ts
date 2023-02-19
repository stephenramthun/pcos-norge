import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "io/vipps/agreementService"
import { updateAgreement } from "db/prisma/dao/agreement"
import { isAgreement, isUser } from "types/guards"

export default async function oppdater(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  const id = JSON.parse(req.body).agreementId
  const agreement = await AgreementService.getAgreement(id)

  if (isAgreement(agreement) && agreement.status !== "PENDING") {
    await updateAgreement(id, agreement.status, agreement.start, agreement.stop)
    res.send({ updated: true })
  } else {
    res.send({ updated: false })
  }

  return res.end()
}
