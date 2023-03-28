import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "io/vipps/agreementService"
import { isUser } from "types/guards"
import { deleteAgreement } from "db/prisma/dao/agreement"
import { VippsConfig } from "config/vipps"

const agreementService = new AgreementService(VippsConfig)

export default async function avslutt(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  const id = req.query.agreementId as string
  const status = await agreementService.stopAgreement(id)

  if (status >= 400) {
    return res.redirect(`/feil?status=${status}`).end()
  }

  const agreement = await deleteAgreement(id)

  if (!agreement) {
    return res.redirect("/feil")
  }

  return res.status(status).redirect("/min-side")
}
