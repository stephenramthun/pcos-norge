import { GetServerSideProps, NextPage } from "next"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import React from "react"

import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { PageContainer } from "components/PageContainer"
import { VippsButton } from "components/VippsButton"

import { Authorized } from "./Authorized"

import styles from "./min-side.module.css"

const Unauthorized: React.FC = () => (
  <Content className={styles.content}>
    <Heading tag="h1" size="medium">
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

interface MinSideProps {
  session: Session
}

const MinSide: NextPage<MinSideProps> = ({ session }) => {
  return (
    <PageContainer>
      <Head title="Min side | PCOS Norge" />
      <Header className={styles.header} />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Min side", href: "min-side" },
          ]}
        />
      </Content>
      {session && <Authorized user={session.user} />}
      {!session && <Unauthorized />}
      <Footer />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  }
}

export default MinSide
