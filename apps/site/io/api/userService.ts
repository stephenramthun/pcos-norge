import { getAgreementForUser } from "db/prisma/dao/agreement"

import { VippsConfig } from "config/vipps"
import { EmailService } from "io/email/emailService"
import { AgreementService } from "io/vipps/agreementService"

const mapAgreement = (agreement: Agreement): Agreement => ({
  id: agreement.id,
  status: agreement.status,
  start: agreement.start,
  stop: agreement.stop,
  paidDate: agreement.paidDate,
})

const agreementService = new AgreementService(VippsConfig)
const emailService = new EmailService()

export const UserService = {
  async getUserData(userId: string): Promise<UserData> {
    let agreement: Agreement | null = await getAgreementForUser(userId)
    if (agreement?.status === "PENDING") {
      agreement = await agreementService.updateAgreementForUser(userId)
    }
    const subscriptions = await emailService.getSubscriptions(userId)

    return {
      agreement: agreement ? mapAgreement(agreement) : null,
      subscriptions,
    }
  },
}
