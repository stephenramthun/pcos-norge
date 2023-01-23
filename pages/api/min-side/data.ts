import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { isUser } from "types/guards"
import { getAgreementsForUser } from "io/prisma/dao/agreement"
import { AgreementService } from "io/vipps/AgreementService"

const agreements = async (userId: string): Promise<Agreement[]> => {
  const localAgreements = await getAgreementsForUser(userId)
  const remoteAgreements = localAgreements
    .map((it) => it.id)
    .map(AgreementService.getAgreement)

  return await Promise.allSettled(remoteAgreements).then((values) => {
    console.log(values.map((it) => (it as any).value.interval))
    return values
      .map((it) => (it as PromiseFulfilledResult<any>).value)
      .filter((it) => it !== undefined && it !== null)
      .map(({ id, status, start, pricing, productName, interval }) => ({
        id,
        status,
        start,
        pricing,
        productName,
        interval,
      }))
  })
}

export default async function data(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    res.status(401).end()
    return
  }

  res.send({ agreements: await agreements(session.user.id) })
}
