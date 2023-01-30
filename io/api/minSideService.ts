import { getAgreementsForUser } from "@io/prisma/dao/agreement"
import { Agreement as AgreementDto } from "@prisma/client"

const mapAgreement = (agreement?: AgreementDto): Agreement | null =>
  agreement
    ? {
        id: agreement.id,
        status: agreement.status,
        start: agreement.start,
        stop: agreement.stop,
      }
    : null

export const MinSideService = {
  async getData(userId: string): Promise<MinSideData> {
    const agreements = await getAgreementsForUser(userId)

    return {
      pendingAgreement: mapAgreement(
        agreements.find(({ status }) => status === "PENDING"),
      ),
      activeAgreement: mapAgreement(
        agreements.find(({ status }) => status === "ACTIVE"),
      ),
    }
  },
}
