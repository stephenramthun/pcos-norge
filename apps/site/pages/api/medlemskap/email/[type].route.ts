import { NextApiRequest, NextApiResponse } from "next"
import { EmailService } from "io/email/emailService"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth].route"
import { isUser } from "types/guards"
import type { SubscriptionType } from "db"

const emailService = new EmailService()

export default async function handleSubscription(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !isUser(session.user)) {
    return res.status(401).end()
  }

  const { type } = req.query

  if (req.method === "DELETE") {
    await emailService.removeSubscription(
      session.user.id,
      type as SubscriptionType,
    )
  } else if (req.method === "PUT") {
    await emailService.addSubscription(
      session.user.id,
      type as SubscriptionType,
    )
  }

  return res.end()
}
