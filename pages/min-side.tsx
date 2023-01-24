import React, { useEffect, useState } from "react"
import dayjs, { ManipulateType } from "dayjs"
import { NextPage } from "next"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { PageContainer } from "@components/PageContainer"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { Heading } from "@components/Heading"
import { Footer } from "@components/Footer"
import { Button } from "@components/Button"
import { Main } from "@components/Main"
import { Body } from "@components/Body"
import { useUserInfo } from "@hooks/useUserInfo"

import styles from "./min-side.module.css"

type MinSideData = {
  agreements: Agreement[]
}

const getRenewalDate = (agreement: Agreement): string => {
  return dayjs(agreement.start)
    .add(
      agreement.interval.count,
      agreement.interval.unit.toLowerCase() as ManipulateType,
    )
    .format("DD.MM.YYYY")
}

const useData = (): MinSideData | null => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/min-side/data", { method: "GET" })
      .then((res) => res.json())
      .then(setData)
  }, [])

  return data
}

const MinSide: NextPage = () => {
  const data = useData()
  const router = useRouter()
  const userInfo = useUserInfo()

  console.log(router.query)

  const activeAgreement = data?.agreements.find(
    (agreement) => agreement.status === "ACTIVE",
  )

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
                <>
                  <Body>Medlemskapsstatus</Body>
                  {activeAgreement && (
                    <Body>
                      Aktiv, fornyes {getRenewalDate(activeAgreement)}
                    </Body>
                  )}
                  {!activeAgreement && <Body>Inaktiv</Body>}
                </>
                <Body>Medlem siden</Body>
                <Body>
                  {new Intl.DateTimeFormat("nb-NO").format(
                    new Date(userInfo.createdAt),
                  )}
                </Body>
              </div>
              <span className={styles.buttons}>
                {!activeAgreement && (
                  <Button
                    onClick={() => {
                      router.push("/api/medlemskap/registrer")
                    }}
                  >
                    Forny medlemskap
                  </Button>
                )}
                <Button onClick={() => signOut({ callbackUrl: "/" })}>
                  Logg ut
                </Button>
                {activeAgreement && (
                  <Button
                    variant="secondary"
                    onClick={() =>
                      router.push(
                        `/api/medlemskap/avslutt?agreementId=${activeAgreement.id}`,
                      )
                    }
                  >
                    Avslutt medlemskap
                  </Button>
                )}
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
