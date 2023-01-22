import { prisma } from "@io/prisma/client"
import { Member } from "@prisma/client"

export const getMember = async (id: bigint): Promise<Member | null> => {
  return prisma.member.findUnique({ where: { id: id } })
}
