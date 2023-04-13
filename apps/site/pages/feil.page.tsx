import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { ReactNode } from "react"

import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"

const getHeading = (status: number): string => {
  switch (status) {
    case 401:
      return "Du er ikke logget inn"
    default:
      return "Oops, det har skjedd en feil"
  }
}

const getBody = (status: number, message?: string): ReactNode => {
  const defaultBody = (
    <>
      Vi er usikre på hva som har skjedd her, men vi undersøker saken.
      <br />
      Prøv igjen senere
    </>
  )
  switch (status) {
    case 401:
      return "Du må logge inn for å se denne siden"
    case 500: {
      return message ?? defaultBody
    }
    default:
      return defaultBody
  }
}

const Feil: NextPage = () => {
  const router = useRouter()

  return (
    <PageContainer>
      <Head />
      <Header />

      <Content>
        <Breadcrumbs
          links={[{ label: "Hjem", href: "/" }, { label: "Feil" }]}
        />
      </Content>

      <Main>
        <Content>
          <Heading tag="h1" size="medium-large">
            {getHeading(Number(router.query.status))}
          </Heading>
        </Content>
        <Content>
          <Body>
            {getBody(Number(router.query.status), String(router.query.message))}
          </Body>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default Feil
