import type { Member } from "@prisma/client"
import { Prisma, PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export function persistMemberRegistration(
  input: Prisma.MemberCreateInput,
): Promise<Member> {
  return prisma.member.create({
    data: {
      givenName: input.givenName,
      familyName: input.familyName,
      email: input.email,
      postalCode: input.postalCode,
      address: input.address,
      city: input.city,
    },
  })
}
