import React from "react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { PortableText } from "@portabletext/react"

import { getClient } from "io/sanity/client"
import { Head } from "components/Head"
import { Main } from "components/Main"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Heading } from "components/Heading"
import { Content } from "components/Content"
import { ArrowLink } from "components/ArrowLink"
import { ArticleCard } from "components/ArticleCard"
import { PageContainer } from "components/PageContainer"
import { usePageComponents } from "hooks/usePageComponents"
import { ArticleObject, SanityPageDocument } from "types/sanity"

import styles from "./index.module.css"

interface HomeProps {
  articles: Array<Omit<ArticleObject, "body">>
  page: SanityPageDocument
}

const Home: NextPage<HomeProps> = ({ articles, page }) => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <PortableText value={page.elements} components={usePageComponents()} />
        <Content className={styles.Section}>
          <article>
            <div className={styles.titleRow}>
              <Heading tag="h2" size="medium">
                Aktuelt
              </Heading>
              <ArrowLink href="aktuelt">Se flere saker</ArrowLink>
            </div>
            <div className={styles.Cards}>
              {articles.map((it) => (
                <ArticleCard
                  key={it.slug}
                  slug={it.slug}
                  title={it.title}
                  image={it.image}
                  published={new Date(it.published)}
                  ingress={it.ingress}
                  className={styles.Card}
                />
              ))}
            </div>
          </article>
        </Content>
      </Main>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const props = await getClient().fetch(`
    { 
      "articles": *[_type == "article"] | order(published desc)[0..5] {
        title,
        "slug": slug.current,
        image,
        published,
        ingress
      },
      "page": *[_type == "page" && id.current == "forsiden"][0]
    }
  `)

  return {
    props: props,
  }
}

export default Home
