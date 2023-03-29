import { AgreementService } from "io/vipps/agreementService"
import { VippsConfig } from "config/vipps"

const mapAgreement = (agreement: Agreement): Agreement => ({
  id: agreement.id,
  status: agreement.status,
  start: agreement.start,
  stop: agreement.stop,
})

const agreementService = new AgreementService(VippsConfig)

export const UserService = {
  async getUpdatedAgreement(userId: string): Promise<UserData> {
    const agreement = await agreementService.updateAgreementForUser(userId)

    return {
      agreement: agreement ? mapAgreement(agreement) : null,
    }
  },
}
