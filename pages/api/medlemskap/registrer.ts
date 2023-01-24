import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "io/vipps/agreementService"
import { hasActiveAgreement, insertAgreement } from "io/prisma/dao/agreement"
import { isUser } from "types/guards"

export default async function registrer(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.redirect(`/feil?status=401`).end()
  }

  if (await hasActiveAgreement(session.user.id)) {
    return res.redirect("/min-side").end()
  }

  const { vippsConfirmationUrl, agreementId } =
    await AgreementService.newAgreement()

  const agreement = await insertAgreement(
    agreementId,
    session.user.id,
    "PENDING",
  )

  if (agreement) {
    return res.redirect(vippsConfirmationUrl).end()
  }

  const message = encodeURIComponent("Kunne ikke tegne medlemskap")
  return res.redirect(`/feil?status=500&message=${message}`).end()
}
