import { sendMail, Welcome } from "emails"
import { EmailDao } from "db/prisma/dao/email"

const emailDao = new EmailDao()

const emailIds = {
  welcome: "velkommen",
}

export class EmailService {
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
