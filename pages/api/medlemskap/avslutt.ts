import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "io/vipps/agreementService"
import { getAgreementsForUser } from "io/prisma/dao/agreement"
import { isUser } from "types/guards"

export default async function avslutt(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    res.status(401).end()
    return
  }

  const id = req.query.agreementId

  const agreements = await getAgreementsForUser(session.user.id)
  const agreement = agreements.find((it) => it.id === id)

  if (!agreement) {
    res.redirect("/feil").end()
    return
  }

  console.log("Avslutter medlemskap med id", agreement.id)
  const status = await AgreementService.stopAgreement(agreement.id)

  if (status >= 400) {
    res.redirect(`/feil?status=${status}`).end()
    return
  }

  res.status(status).redirect("/min-side?status=STOPPED")
}
