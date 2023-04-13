import { deleteAgreement } from "db/prisma/dao/agreement"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth].route"
import { VippsConfig } from "config/vipps"
import { EmailService } from "io/email/emailService"
import { AgreementService } from "io/vipps/agreementService"
import { isUser } from "types/guards"

const agreementService = new AgreementService(VippsConfig)
const emailService = new EmailService()

export default async function avslutt(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

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

  await emailService.removeSubscriptions(session.user.id)

  return res.status(status).redirect("/min-side")
}
