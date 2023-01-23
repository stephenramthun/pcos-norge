import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function avslutt(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).end()
    return
  }
}
