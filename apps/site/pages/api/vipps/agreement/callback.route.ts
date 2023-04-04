import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth].route"
import { isUser } from "types/guards"
import { getAgreementForUser } from "db/prisma/dao/agreement"
import { AgreementService } from "io/vipps/agreementService"
import { VippsConfig } from "config/vipps"
import { EmailService } from "io/email/emailService"

const agreementService = new AgreementService(VippsConfig)
const emailService = new EmailService()

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.redirect(`/feil?status=401`).end()
  }

  const agreement = await getAgreementForUser(session.user.id)

  if (!agreement) {
    return res.status(400).end()
  }

  const remoteAgreement = await agreementService.getAgreement(agreement.id)

  if (remoteAgreement) {
    agreementService.pollAgreementStatus(agreement.id, agreement.chargeId)
  }

  if (
    remoteAgreement.status === "PENDING" ||
    remoteAgreement.status === "ACTIVE"
  ) {
    await emailService.sendWelcomeMail(
      session.user.id,
      session.user.email,
      session.user.givenName,
    )
  }

  return res.redirect(`${VippsConfig.merchantAgreementUri}?welcome=true`)
}
