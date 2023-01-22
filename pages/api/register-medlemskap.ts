import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import { AgreementService } from "@io/vipps/AgreementService"

export default async function registrerMedlemskap(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    const { vippsConfirmationUrl, agreementId } =
      await AgreementService.newAgreement()

    console.log(session)

    // TODO: Save agreementId to db
    console.log(agreementId)

    res.redirect(vippsConfirmationUrl).end()
  } else {
    // TODO: Vis feilside til brukeren.
    // Dette steget bør ikke feile med mindre bruker valgte å avbryte registrering i Vipps
    res.send({ content: "Feil" })
  }
}
