import React from "react"
import { PortableText } from "@portabletext/react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import type { PortableTextBlock } from "@portabletext/types"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { ReferenceLinkSummary } from "@components/ReferenceLinkSummary"
import { usePortableTextComponents } from "@hooks/usePortableTextComponents"
import { useReferenceLinks } from "@hooks/useReferenceLinks"

import { client } from "../../io/sanity"

import styles from "./hvaErPcos.module.css"

interface HvaErPcosProps {
  body: Array<PortableTextBlock>
}

const HvaErPcos: NextPage<HvaErPcosProps> = ({ body }) => {
  const referenceLinks = useReferenceLinks(body)
  const portableTextComponents = usePortableTextComponents(body)

  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Hva er PCOS", href: "/hva-er-pcos" },
          ]}
        />
      </Content>
      <Content className={styles.ArticleContent}>
        <PortableText value={body} components={portableTextComponents} />
        <ReferenceLinkSummary links={referenceLinks} />
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HvaErPcosProps>
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

export default HvaErPcos
