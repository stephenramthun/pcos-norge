import React, { useMemo } from "react"
import { NextPage } from "next"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { Main } from "@components/Main"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { useSession } from "next-auth/react"

type UserInfo = {
  name: string
  streetAddress: string
  postalCode: string
  region: string
  email: string
  phoneNumber: string
}

const useUserInfo = (): UserInfo => {
  return useMemo(() => {
    fetch("/api/medlemskap")
    return {
      name: "",
      email: "",
      streetAddress: "",
      region: "",
      postalCode: "",
      phoneNumber: "",
    }
  }, [])
}

const MinSide: NextPage = () => {
  const userInfo = useUserInfo()
  console.log(userInfo)

  const { data } = useSession()
  console.log(data)

  return (
    <PageContainer>
      <Head />
      <Header />

      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Min side", href: "min-side" },
          ]}
        />
      </Content>

      <Main>
        <Content>
          <Heading tag="h1" size="medium-large">
            Min side
          </Heading>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default MinSide
