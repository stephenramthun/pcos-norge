import { useSession } from "next-auth/react"

type UserInfo = {
  id: string
  name: string
  email: string
  streetAddress: string
  postalCode: string
  region: string
  phoneNumber: string
  createdAt: string
}

const isUserInfo = (data?: any): data is UserInfo => {
  return (
    typeof data?.id === "string" &&
    typeof data?.name === "string" &&
    typeof data?.email === "string" &&
    typeof data?.streetAddress === "string" &&
    typeof data?.postalCode === "string" &&
    typeof data?.region === "string" &&
    typeof data?.phoneNumber === "string" &&
    typeof data?.createdAt === "string"
  )
}

export const useUserInfo = (): UserInfo | null => {
  const { data } = useSession()

  if (!data || !isUserInfo(data.user)) {
    return null
  }

  return data.user
}
