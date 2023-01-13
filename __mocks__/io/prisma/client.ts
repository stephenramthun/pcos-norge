import { Member, Prisma } from "@prisma/client"

let Members: Record<string, Member> = {}

export const persistMemberRegistration = (
  input: Prisma.MemberCreateInput,
): Member => {
  if (Members[input.email]) {
    throw { code: "P2002" }
  }

  Members[input.email] = {
    ...input,
    id: BigInt(Object.keys(Members).length),
    createdAt: new Date(),
  }

  return Members[input.email]
}

export const clearMembers = (): void => {
  Members = {}
}
