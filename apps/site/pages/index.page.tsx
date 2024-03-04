import { ImageAsset } from "@sanity/types"
import classNames from "classnames"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import React from "react"

import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Hero } from "components/Hero"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"
import { getClient } from "io/sanity/client"
import { ArticleObject, SanityImageDocument } from "types/sanity"

import { Articles } from "./Articles"
import { HvaErPcosCard } from "./HvaErPcosCard"
import { OmOssCard } from "./OmOssCard"

import styles from "./index.module.css"

import block from "styles/block.module.css"

type Image = Omit<SanityImageDocument, "imageAsset"> & {
  asset: ImageAsset
  alt: string
}

interface HomeProps {
  articles: Array<Omit<ArticleObject, "body">>
  images: {
    hvaErPcos: Image
    omOss: [Image, Image]
  }
}

const Home: NextPage<HomeProps> = ({ articles, images }) => (
  <PageContainer>
    <Head />
    <Header
      style={
        {
          "--semantic-color-text-primary": "var(--color-brand-light-teal)",
        } as React.CSSProperties
      }
      variant="dark"
    />
    <Hero />
    <Main id="main">
      <Content className={classNames(styles.firstContentSection, block.large)}>
        <Articles articles={articles} />
      </Content>
      <Content className={block.large}>
        <HvaErPcosCard image={images.hvaErPcos} />
      </Content>
      <Content className={block.large}>
        <OmOssCard images={images.omOss} />
      </Content>
    </Main>
    <Footer />
  </PageContainer>
)

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const props = await getClient().fetch(`
    { 
      "articles": *[_type == "article" && show == true] | order(published desc)[0..5] {
        title,
        "slug": slug.current,
        image {
          _type,
          alt,
          asset->
        },
        published,
        ingress
      },
      "images": {
        "hvaErPcos": *[_type == "imageDocument" && id.current == "hva-er-pcos"][0] {
          title,
          "asset": imageAsset.asset->,
          "alt": imageAsset.alt,
          id
        },
        "omOss": *[_type == "imageDocument" && id.current match "om-oss*"] {
          title,
          "asset": imageAsset.asset->,
          "alt": imageAsset.alt,
          id
        }
      },
    }
  `)

  return {
    props: props,
  }
}

export default Home
