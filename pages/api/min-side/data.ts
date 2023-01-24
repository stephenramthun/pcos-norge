import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth]"
import { isUser } from "types/guards"
import { getAgreementsForUser } from "io/prisma/dao/agreement"

export default async function data(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  const agreements = await getAgreementsForUser(session.user.id)

  res.send({
    pendingAgreement:
      agreements.find(({ status }) => status === "PENDING") !== undefined,
    activeAgreement:
      agreements.find(({ status }) => status === "ACTIVE") !== undefined,
    agreementStatus: "PENDING",
  })
  return res.end()
}
