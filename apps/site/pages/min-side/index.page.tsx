import React from "react"
import { NextPage } from "next"
import { useSession } from "next-auth/react"

import { Head } from "components/Head"
import { Header } from "components/Header"
import { Content } from "components/Content"
import { PageContainer } from "components/PageContainer"
import { Breadcrumbs } from "components/Breadcrumbs"
import { VippsButton } from "components/VippsButton"
import { Heading } from "components/Heading"
import { Footer } from "components/Footer"
import { Main } from "components/Main"
import { Body } from "components/Body"

import { Authorized } from "./Authorized"

import styles from "./min-side.module.css"

const Unauthorized: React.FC = () => {
  return (
    <Content className={styles.content}>
      <Heading tag="h1" size="medium-large">
        Min side
      </Heading>
      <Body>
        Velkommen tilbake 👋
        <br />
        Du må logge inn for å se denne siden
      </Body>
      <VippsButton variant="login" />
    </Content>
  )
}

const MinSide: NextPage = () => {
  const { data: session } = useSession()

  return (
    <PageContainer>
      <Head title="Min side | PCOS Norge" />
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
        {session && <Authorized user={session.user} />}
        {!session && <Unauthorized />}
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default MinSide
