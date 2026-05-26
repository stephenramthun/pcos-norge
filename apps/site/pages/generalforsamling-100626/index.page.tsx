import React from "react"

import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"

import styles from "./arsmote.module.css"

const Arsmote = () => {
  return (
    <PageContainer>
      <Head />
      <Header className={styles.header} />
      <Main className={styles.main}>
        <Content>
          <Breadcrumbs
            links={[
              { href: "/", label: "Hjem" },
              {
                href: `/generalforsamling-100626`,
                label: "Ekstraordinær generalforsamling 10.06.2026",
              },
            ]}
          />
        </Content>
        <Content className={styles.content}>
          <Heading tag="h1" size="medium">
            Filer til ekstraordinær generalforsamling 10.06.2026
          </Heading>
          <ul>
            <li>
              <Link
                href="/filer/protokoll-ekstraordinar-generalforsamling-100626.pdf"
                target="_blank"
                className={styles.link}
              >
                Protokoll
              </Link>
            </li>
            <li>
              <Link
                href="/filer/aarsmelding-2024.pdf"
                target="_blank"
                className={styles.link}
              >
                Vedtekter
              </Link>
            </li>
          </ul>
        </Content>
      </Main>
      <Footer />
    </PageContainer>
  )
}

export default Arsmote
