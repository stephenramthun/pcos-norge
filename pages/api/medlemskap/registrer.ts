import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { AgreementService } from "@io/vipps/AgreementService"
import { insertAgreement } from "@io/prisma/dao/agreement"
import { isUser } from "types/guards"

export default async function registrer(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session && isUser(session.user)) {
    const { vippsConfirmationUrl, agreementId } =
      await AgreementService.newAgreement()

    const agreement = await insertAgreement(agreementId, session.user.id)

    if (agreement) {
      res.redirect(vippsConfirmationUrl).end()
    } else {
      // TODO: Show error message
      res.end()
    }
  } else {
    // TODO: Vis feilside til brukeren.
    // Dette steget bør ikke feile med mindre bruker valgte å avbryte registrering i Vipps
    res.send({ content: "Feil" })
  }
}
