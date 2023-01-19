import NextAuth, { AuthOptions, Session, User } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { VippsProvider } from "@auth/providers/VippsProvider"
import { prisma } from "@io/prisma/client"

type AdditionalFields = {
  id: string
  streetAddress: string
  postalCode: string
  region: string
  phoneNumber: string
  createdAt: string
}

type VippsSession = Session & {
  user: Session["user"] & Partial<AdditionalFields>
}
type VippsUser = User & AdditionalFields

const mergeUserInfo = (
  session: Partial<VippsSession>,
  user: Partial<VippsUser>,
): void => {
  if (session.user) {
    session.user.id = user.id
    session.user.streetAddress = user.streetAddress
    session.user.postalCode = user.postalCode
    session.user.region = user.region
    session.user.createdAt = user.createdAt
    session.user.phoneNumber = user.phoneNumber
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [VippsProvider],
  callbacks: {
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
