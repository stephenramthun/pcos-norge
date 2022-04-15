import React from "react"
import classNames from "classnames"
import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import type { PortableTextBlock } from "@portabletext/types"

import { Head } from "@components/Head"
import { Body } from "@components/Body"
import { Link } from "@components/Link"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { ReferenceLinkSummary } from "@components/ReferenceLinkSummary"
import {
  useReferenceLinks,
  UseReferenceLinksResult,
} from "@hooks/useReferenceLinks"

import { client } from "../../config/sanity"

import styles from "./omPcos.module.css"

const getPortableTextComponents = (
  referenceLinks: UseReferenceLinksResult,
): Partial<PortableTextReactComponents> => ({
  block: {
    h1: ({ children }) => (
      <div className={styles.HeroText}>
        <Heading size="medium-large" tag="h1">
          {children}
        </Heading>
      </div>
    ),
    h2: ({ children }) => (
      <Heading className={styles.Content} tag="h2" size="small">
        {children}
      </Heading>
    ),
    normal: ({ children }) => (
      <Body className={classNames(styles.Content, styles.Body)}>
        {children}
      </Body>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      return <Link href={value.href}>{children}</Link>
    },
    referenceLink: ({ value }) => {
      return (
        <a href={`#${value._key}`} className={styles.Link}>
          <sup>[{referenceLinks[value._key]?.index}]</sup>
        </a>
      )
    },
  },
})

interface OmPcosProps {
  body: Array<PortableTextBlock>
}

const OmPcos: NextPage<OmPcosProps> = ({ body }) => {
  const referenceLinks = useReferenceLinks(body)

  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Om PCOS", href: "/om-pcos" },
          ]}
        />
      </Content>
      <Content className={styles.ArticleContent}>
        <PortableText
          value={body}
          components={getPortableTextComponents(referenceLinks)}
        />
        <ReferenceLinkSummary
          links={referenceLinks}
          className={styles.LinkSummary}
        />
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<OmPcosProps>
> => {
  const props = await client.fetch(`
    { 
      "body": *[_type == "omPcos"][0].body
    }
  `)

  return {
    props: props,
  }
}

export default OmPcos
