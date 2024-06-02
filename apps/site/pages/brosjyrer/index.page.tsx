import type { NextPage } from "next"
import React from "react"

import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { PageContainer } from "components/PageContainer"

import styles from "./brosjyrer.module.css"

const Brosjyrer: NextPage = () => (
  <PageContainer>
    <Head />
    <Header className={styles.header} />
    <Content>
      <Breadcrumbs
        links={[
          { label: "Hjem", href: "/" },
          { label: "Brosjyrer", href: "brosjyrer" },
        ]}
      />
    </Content>
    <Content className={styles.heading}>
      <Heading tag="h1" size="medium">
        Brosjyrer
      </Heading>
      <Body>
        Her finner du brosjyrer som du enten kan lese som oppslag eller laste
        ned, printe og brette i to til a5-format. Brosjyren ‘Hva er PCOS?’
        passer godt på legekontorer og helsestasjoner. Vi oppfordrer alle i
        helsevesenet om å printe noen til sine pasienter.
      </Body>
    </Content>
    <Content className={styles.links}>
      <Link
        href="/brosjyrer/brosjyre_pcosnorge_hvaerpcos_oppslag.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hva er PCOS? (oppslag)
      </Link>
      <Link
        href="/brosjyrer/brosjyre_pcosnorge_hvaerpcos_print.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hva er PCOS? (print)
      </Link>
      <Link
        href="/brosjyrer/brosjyre_pcosnorge_oppslag.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        PCOS Norge (oppslag)
      </Link>
      <Link
        href="/brosjyrer/Brosjyre_pcosnorge_print.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        PCOS Norge (print)
      </Link>
    </Content>
    <Footer />
  </PageContainer>
)

export default Brosjyrer
