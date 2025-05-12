import { ArrowRight } from "@phosphor-icons/react"
import { PortableTextBlock } from "@portabletext/types"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import React, { useLayoutEffect } from "react"

import { BlockContentContainer } from "components/BlockContentContainer"
import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"
import { ReferenceLinkSummary } from "components/ReferenceLinkSummary"
import { useReferenceLinks } from "hooks/useReferenceLinks"
import { getClient } from "io/sanity/client"
import { slugify } from "util/string"

import styles from "./omOss.module.css"

const useUpdateReferenceLinks = () => {
  useLayoutEffect(() => {
    Array.from(document.getElementsByTagName("sup")).forEach((element, i) => {
      element.innerText = `[${i + 1}]`
    })
  }, [])
}

type Props = {
  elements: {
    title: string
    content: PortableTextBlock[]
  }[]
}

const OmOss: NextPage<Props> = ({ elements }) => {
  const content = elements.flatMap((it) => it.content)

  const referenceLinks = useReferenceLinks(content)

  useUpdateReferenceLinks()

  return (
    <PageContainer>
      <Head />
      <Header className={styles.header} />
      <Main>
        <Content>
          <Breadcrumbs
            links={[
              { href: "/", label: "Hjem" },
              { href: `/om-oss`, label: "Om oss" },
            ]}
          />
        </Content>
        <Content className={styles.content}>
          <div className={styles.innholdsfortegnelse}>
            <ul>
              {elements.map((it, i) => (
                <li key={i}>
                  <a href={`#${slugify(it.title)}`}>
                    {it.title}
                    <ArrowRight size={24} />
                  </a>
                </li>
              ))}
              <li>
                <a href="#protokoll-og-årsmelding">
                  Protokoller og årsmeldinger
                  <ArrowRight size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            {elements.map((it, i) => (
              <React.Fragment key={i}>
                <Heading
                  tag={i === 0 ? "h1" : "h2"}
                  size="medium"
                  id={slugify(it.title)}
                >
                  {it.title}
                </Heading>
                <div className={styles.sectionContent}>
                  <BlockContentContainer blocks={it.content} />
                </div>
              </React.Fragment>
            ))}

            <Heading tag="h2" size="medium" id="protokoll-og-årsmelding">
              Protokoller og årsmeldinger
            </Heading>
            <div className={styles.sectionContent}>
              <Body>
                <Link href="/filer/aarsmelding-2024.pdf" target="_blank">
                  Årsmelding 2024
                </Link>
              </Body>
              <Body>
                <Link href="/filer/protokoll-2025.pdf" target="_blank">
                  Protokoll 2025
                </Link>
              </Body>
              <Body>
                <Link href="/filer/aarsmelding-2023.pdf" target="_blank">
                  Årsmelding 2023
                </Link>
              </Body>
              <Body>
                <Link href="/filer/protokoll-2024.pdf" target="_blank">
                  Protokoll 2024
                </Link>
              </Body>
            </div>

            {Object.entries(referenceLinks).length > 0 && (
              <ReferenceLinkSummary links={referenceLinks} />
            )}
          </div>
        </Content>
      </Main>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const page = await getClient().fetch(
    `
    *[_type == "tableOfContentsPage" && id.current == $slug][0] {
      elements
    }
    `,
    { slug: "om-oss" },
  )

  return {
    props: {
      elements: page.elements,
    },
  }
}

export default OmOss
