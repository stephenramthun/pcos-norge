import React from "react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { SanityImageObject } from "@sanity/image-url/lib/types/types"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"

import { client } from "../../config/sanity"

import styles from "./aktuelt.module.css"

interface AktueltProps {
  articles: {
    slug: string
    title: string
    published: string
    image: SanityImageObject
  }[]
}

const Aktuelt: NextPage<AktueltProps> = ({ articles }) => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Aktuelt", href: "/aktuelt" },
          ]}
        />
      </Content>
      <Content>
        <Heading size="medium-large" tag="h1">
          Aktuelt
        </Heading>
      </Content>
      <Content className={styles.CardGrid}>
        {articles.map((it) => (
          <ArticleCard
            key={it.slug}
            slug={it.slug}
            title={it.title}
            image={it.image}
            published={new Date(it.published)}
            className={styles.Card}
          />
        ))}
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AktueltProps>
> => {
  const props = await client.fetch(`
    { 
      "articles": *[_type == "article"] | order(published desc) {
        title,
        "slug": slug.current,
        image,
        published
      }
    }
  `)

  return {
    props: props,
  }
}

export default Aktuelt
