import { NextPage } from "next"

import { Body } from "components/Body"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { PageContainer } from "components/PageContainer"
import { Spacer } from "components/Spacer"

import styles from "./pageNotFound.module.css"

const PageNotFound: NextPage = () => (
  <PageContainer>
    <Head title="Side ikke funnet | PCOS Norge" />
    <Header className={styles.header} />
    <Content className={styles.content}>
      <Heading className={styles.heading} tag="h1" size="medium">
        Oida, her var det visst ingenting
      </Heading>
      <Body>Vi fant ikke siden du lette etter</Body>
    </Content>
    <Content className={styles.content}>
      <Link href="/">Tilbake til forsiden</Link>
    </Content>
    <Spacer />
    <Footer />
  </PageContainer>
)

export default PageNotFound
