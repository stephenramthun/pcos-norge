import { sendMail, Welcome } from "emails"

export class EmailService {
  sendWelcomeMail = async (to: string, givenName: string): Promise<void> => {
    await sendMail({
      from: "hei@pcosnorge.no",
      to: to,
      dangerouslyForceDeliver: true,
      component: <Welcome name={givenName} />,
    })
  }
}
