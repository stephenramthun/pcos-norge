import { sendMail, Welcome } from "emails"
import { EmailDao } from "db/prisma/dao/email"
import type { SubscriptionType } from "db"

const emailDao = new EmailDao()

const emailIds = {
  welcome: "velkommen",
}

const defaultSubscriptions: SubscriptionType[] = ["MEDLEMSBREV", "NYHETSBREV"]

export class EmailService {
  addDefaultSubscriptions = async (userId: string): Promise<void> => {
    await emailDao.subscribe(userId, ...defaultSubscriptions)
  }

  getSubscriptions = async (userId: string): Promise<SubscriptionType[]> => {
    return emailDao.getSubscriptions(userId)
  }

  removeSubscriptions = async (userId: string): Promise<number> => {
    return emailDao.removeSubscriptions(userId)
  }

  sendWelcomeMail = async (
    userId: string,
    to: string,
    givenName: string,
  ): Promise<void> => {
    const hasSentWelcomeEmail = await emailDao.hasSentEmail(
      userId,
      emailIds.welcome,
    )
    if (hasSentWelcomeEmail) {
      return
    }
    await sendMail({
      from: "hei@pcosnorge.no",
      to: to,
      dangerouslyForceDeliver: true,
      component: <Welcome name={givenName} />,
    }).then(() => {
      emailDao.setAsSent(userId, emailIds.welcome)
    })
  }
}
