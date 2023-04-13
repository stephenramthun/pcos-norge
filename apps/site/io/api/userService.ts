import { VippsConfig } from "config/vipps"
import { EmailService } from "io/email/emailService"
import { AgreementService } from "io/vipps/agreementService"

const mapAgreement = (agreement: Agreement): Agreement => ({
  id: agreement.id,
  status: agreement.status,
  start: agreement.start,
  stop: agreement.stop,
})

const agreementService = new AgreementService(VippsConfig)
const emailService = new EmailService()

export const UserService = {
  async getUserData(userId: string): Promise<UserData> {
    const agreement = await agreementService.updateAgreementForUser(userId)
    const subscriptions = await emailService.getSubscriptions(userId)

    return {
      agreement: agreement ? mapAgreement(agreement) : null,
      subscriptions,
    }
  },
}
