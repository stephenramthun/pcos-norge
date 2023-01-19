import React from "react"
import { NextPage } from "next"
import { signOut } from "next-auth/react"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { Main } from "@components/Main"
import { Body } from "@components/Body"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { useUserInfo } from "@hooks/useUserInfo"
import { Button } from "@components/Button"

import styles from "./min-side.module.css"

const MinSide: NextPage = () => {
  const userInfo = useUserInfo()

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
        <Content className={styles.content}>
          <Heading tag="h1" size="medium-large">
            Min side
          </Heading>
          {userInfo && (
            <>
              <div className={styles.grid}>
                <Body>Navn</Body>
                <Body>{userInfo.name}</Body>
                <Body>Adresse</Body>
                <span className={styles.flexColumn}>
                  <Body>{userInfo.streetAddress}</Body>
                  <Body>
                    {userInfo.postalCode} {userInfo.region}
                  </Body>
                </span>
                <Body>Epost</Body>
                <Body>{userInfo.email}</Body>
              </div>
              <hr />
              <div className={styles.grid}>
                <Body>Medlem siden</Body>
                <Body>
                  {new Intl.DateTimeFormat("nb-NO").format(
                    new Date(userInfo.createdAt),
                  )}
                </Body>
              </div>
              <span className={styles.buttons}>
                <Button onClick={() => signOut({ callbackUrl: "/" })}>
                  Logg ut
                </Button>
                <Button variant="secondary">Avslutt medlemskap</Button>
              </span>
            </>
          )}
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default MinSide
