import { prisma } from "@io/prisma/client"
import { Agreement, AgreementStatus } from "@prisma/client"

export const getAgreement = async (id: string): Promise<Agreement | null> => {
  return prisma.agreement.findUnique({ where: { id: id } })
}

export const getAgreementsForUser = async (
  id: string,
): Promise<Agreement[]> => {
  const result = (await prisma.user.findUnique({
    where: { id: id },
    select: { agreements: true },
  })) ?? { agreements: [] }

  return result.agreements as unknown as Agreement[]
}

export const hasActiveAgreement = async (userId: string): Promise<boolean> => {
  const agreements = await getAgreementsForUser(userId)
  return (
    agreements.find((agreement) => agreement.status === "ACTIVE") !== undefined
  )
}

export const insertAgreement = async (
  id: string,
  userId: string,
  status: AgreementStatus,
  start?: string,
  stop?: string,
): Promise<Agreement> => {
  return prisma.agreement.create({
    data: {
      id,
      userId,
      status,
      start,
      stop,
    },
  })
}

export const deleteAgreement = async (id: string): Promise<Agreement> => {
  return prisma.agreement.delete({ where: { id } })
}
