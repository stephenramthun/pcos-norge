import React from "react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { PortableTextBlock } from "@portabletext/types"

import { client } from "../io/sanity"

import { Hero } from "@modules/frontPage"
import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { ArrowLink } from "@components/ArrowLink"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"
import { usePortableTextComponents } from "@hooks/usePortableTextComponents"

import styles from "./index.module.css"
import { PortableText } from "@portabletext/react"

interface HomeProps {
  hero: string
  articles: Array<Omit<Article, "body">>
  omOss: PortableTextBlock
  omPcos: PortableTextBlock
}

const Home: NextPage<HomeProps> = ({ hero, articles, omOss, omPcos }) => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <Hero text={hero} />
        <Content className={styles.Section} id="about">
          <article>
            <Heading tag="h2" size="medium">
              Hva er PCOS
            </Heading>
            <PortableText
              value={omPcos}
              components={usePortableTextComponents([omPcos])}
            />
            <ArrowLink href="/hva-er-pcos">Les mer</ArrowLink>
          </article>
          <article>
            <Heading tag="h2" size="medium">
              Om oss
            </Heading>
            <PortableText
              value={omOss}
              components={usePortableTextComponents([omOss])}
            />
            <ArrowLink href="/om-oss">Les mer</ArrowLink>
          </article>
        </Content>
        <Content className={styles.Section}>
          <article>
            <Heading tag="h2" size="medium">
              Aktuelt
            </Heading>
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
  const props = await client.fetch(`
    { 
      "hero": *[_type == "hero"][0].text,
      "articles": *[_type == "article"] | order(published desc) {
        title,
        "slug": slug.current,
        image,
        published,
        ingress
      },
      "omOss": *[_type == "omOss"][0].body[0],
      "omPcos": *[_type == "omPcos"][0].body[1]
    }
  `)

  return {
    props: props,
  }
}

export default Home
