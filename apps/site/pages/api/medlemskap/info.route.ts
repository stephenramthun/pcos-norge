import { getUserInfo, updateUser } from "db/prisma/dao/user"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "../auth/[...nextauth].route"
import { isUser } from "types/guards"
import {
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
} from "util/form"

const hasValidStringValue = (
  body: Record<string, string>,
  key: keyof typeof body,
): boolean => {
  return body[key] ? body[key].length > 0 : false
}

const hasValidBody = (req: NextApiRequest): boolean => {
  return (
    hasValidStringValue(req.body, "givenName") &&
    hasValidStringValue(req.body, "familyName") &&
    hasValidStringValue(req.body, "streetAddress") &&
    validatePostalCode(req.body.postalCode) === true &&
    hasValidStringValue(req.body, "region") &&
    validateEmail(req.body.email) === true &&
    validatePhoneNumber(req.body.phoneNumber) === true
  )
}

export default async function put(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  if (req.method === "GET") {
    const userInfo = await getUserInfo(session.user.id)
    await res.send(JSON.stringify(userInfo))
    return res.status(200).end()
  }

  if (req.method !== "PUT") {
    res.setHeader("Allow", "PUT")
    return res.status(405).end("Method Not Allowed")
  }

  if (!hasValidBody(req)) {
    return res.status(400).end("Invalid body")
  }

  await updateUser(session.user.id, req.body)

  return res.status(204).end()
}
