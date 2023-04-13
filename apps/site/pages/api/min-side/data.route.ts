import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth].route"
import { UserService } from "io/api/userService"
import { isUser } from "types/guards"

export default async function data(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  res.send(await UserService.getUserData(session.user.id))
  return res.end()
}
