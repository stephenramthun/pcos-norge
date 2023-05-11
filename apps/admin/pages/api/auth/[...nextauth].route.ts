import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "db"
import { isAdmin } from "db/prisma/dao/admin"
import NextAuth, { AuthOptions, User } from "next-auth"

import { VippsProvider } from "auth/providers/VippsProvider"

type AdditionalFields = {
  id: string
  givenName: string
}

type VippsUser = User & AdditionalFields

const mergeUserInfo = (
  session: Partial<VippsSession>,
  user: Partial<VippsUser>,
): void => {
  if (session.user) {
    session.user.id = user.id
    session.user.givenName = user.givenName
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [VippsProvider],
  callbacks: {
    async signIn({ user }) {
      return await isAdmin(user.id)
    },
    async session({ session, user }) {
      mergeUserInfo(session, user)
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
}

export default NextAuth(authOptions)
