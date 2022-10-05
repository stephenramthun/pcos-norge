import { NextPage } from "next"

import { Main } from "@components/Main"
import { Body } from "@components/Body"
import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { PageContainer } from "@components/PageContainer"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { Heading } from "@components/Heading"
import { Link } from "@components/Link"

import styles from "./pageNotFound.module.css"

const PageNotFound: NextPage = () => {
  return (
    <PageContainer>
      <Head />

      <Header />

      <Content>
        <Breadcrumbs links={[{ label: "Hjem", href: "/" }, { label: "404" }]} />
      </Content>

      <Main>
        <Content>
          <Heading tag="h1" size="medium-large">
            Oida, her var det visst ingenting
          </Heading>
          <Body>Vi fant ikke siden du lette etter</Body>
        </Content>
        <Content className={styles.content}>
          <Link href="/">Tilbake til forsiden</Link>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default PageNotFound
