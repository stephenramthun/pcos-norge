import { NextPage } from "next"

import { Content } from "components/Content"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"

import styles from "./index.module.css"

const Årsmøte: NextPage = () => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <Content>
          <Heading tag="h1" size="medium">
            Vedlegg til årsmøtet 2024
          </Heading>
        </Content>
        <Content>
          <div className={styles.filer}>
            <Link
              href="/filer/aarsmelding.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Årsmelding 2023
            </Link>
            <Link
              href="/filer/protokoll.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Protokoll
            </Link>
            <Link
              href="/filer/vedtekter.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vedtekter
            </Link>
          </div>
        </Content>
      </Main>
    </PageContainer>
  )
}

export default Årsmøte
