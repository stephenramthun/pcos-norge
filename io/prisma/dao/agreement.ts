import { prisma } from "@io/prisma/client"
import { Agreement } from "@prisma/client"

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

export const insertAgreement = async (
  id: string,
  userId: string,
): Promise<Agreement> => {
  return prisma.agreement.create({
    data: {
      id: id,
      userId: userId,
    },
  })
}
