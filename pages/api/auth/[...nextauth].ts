import NextAuth, { AuthOptions } from "next-auth"
import { VippsProvider } from "../../../auth/providers/VippsProvider"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@io/prisma/client"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [VippsProvider],
}

export default NextAuth(authOptions)
