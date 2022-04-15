import React from "react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import type { SanityImageObject } from "@sanity/image-url/lib/types/types"

import { client } from "../config/sanity"

import { Hero } from "@modules/frontPage"

import { Body } from "@components/Body"
import { ArrowLink } from "@components/ArrowLink"
import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"

import styles from "./index.module.css"

interface HomeProps {
  hero: string
  articles: {
    slug: string
    title: string
    published: string
    image: SanityImageObject
  }[]
}

const Home: NextPage<HomeProps> = ({ hero, articles }) => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <Hero text={hero} />
        <Content className={styles.Section} id="about">
          <article>
            <Heading tag="h2" size="medium">
              Om PCOS
            </Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              parturient pellentesque platea vulputate sed ut pellentesque
              pulvinar. Rutrum facilisis in tellus nulla a eget pulvinar risus
              amet. Semper nisi, diam odio sollicitudin. Sagittis, quis enim sed
              quam nisi. Auctor posuere facilisis neque, scelerisque ac
              habitant. Aliquam praesent pellentesque in et sem vel interdum.
            </Body>
            <ArrowLink href="/om-pcos">Les mer</ArrowLink>
          </article>
          <article>
            <Heading tag="h2" size="medium">
              Om foreningen
            </Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              parturient pellentesque platea vulputate sed ut pellentesque
              pulvinar. Rutrum facilisis in tellus nulla a eget pulvinar risus
              amet. Semper nisi, diam odio sollicitudin. Sagittis, quis enim sed
              quam nisi. Auctor posuere facilisis neque, scelerisque ac
              habitant. Aliquam praesent pellentesque in et sem vel interdum.
            </Body>
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
        published
      }
    }
  `)

  return {
    props: props,
  }
}

export default Home
