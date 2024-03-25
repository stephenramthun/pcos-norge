import { NextPage } from "next"
import React from "react"

import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { PageContainer } from "components/PageContainer"
import { Spacer } from "components/Spacer"

import styles from "./bidra.module.css"

const Bidra: NextPage = () => {
  return (
    <PageContainer>
      <Head title="Bidra | PCOS Norge" />
      <Header className={styles.header} />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Bidra", href: "/bidra" },
          ]}
        />
      </Content>
      <Content className={styles.content}>
        <Heading tag="h1" size="medium">
          Vi trenger din hjelp
        </Heading>
        <Body>
          Ditt bidrag vil hjelpe oss i vårt arbeid for mer synlighet,
          normalisering og økt oppmerksomhet rundt diagnosen og bedre kunnskap
          om PCOS i helsevesenet.
        </Body>
        <Body>
          Du kan bidra ved å vippse et valgfritt beløp til <mark>750223</mark>{" "}
          eller donere direkte til vårt kontonummer <mark>1506 71 25999</mark>
        </Body>
      </Content>
      <Spacer />
      <Footer />
    </PageContainer>
  )
}

export default Bidra
