import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "io/vipps/agreementService"
import {
  hasActiveOrPendingAgreement,
  insertAgreement,
} from "db/prisma/dao/agreement"
import { isUser } from "types/guards"
import { VippsConfig } from "config/vipps"
import { EmailService } from "io/email/emailService"

const agreementService = new AgreementService(VippsConfig)
const emailService = new EmailService()

export default async function registrer(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.redirect(`/feil?status=401`).end()
  }

  if (await hasActiveOrPendingAgreement(session.user.id)) {
    return res.redirect("/min-side").end()
  }

  const { vippsConfirmationUrl, agreementId, chargeId } =
    await agreementService.newAgreement()

  const agreement = await insertAgreement(
    agreementId,
    session.user.id,
    "PENDING",
    chargeId,
  )

  if (agreement) {
    await emailService.addDefaultSubscriptions(session.user.id)
    return res.redirect(vippsConfirmationUrl).end()
  }

  const message = encodeURIComponent("Kunne ikke tegne medlemskap")
  return res.redirect(`/feil?status=500&message=${message}`).end()
}
