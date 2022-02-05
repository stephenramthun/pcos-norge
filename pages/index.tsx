import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import React from "react"

import { client } from "../config/sanity"

import { Hero } from "@modules/frontPage"

import { Body } from "@components/Body"
import { Link } from "@components/Link"
import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { PageContainer } from "@components/PageContainer"

import styles from "./index.module.css"

interface HomeProps {
  hero: string
  articles: {
    slug: string
    title: string
    published: string
    imageUrl: string
  }[]
}

const Home: NextPage<HomeProps> = ({ hero, articles }) => (
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
            quam nisi. Auctor posuere facilisis neque, scelerisque ac habitant.
            Aliquam praesent pellentesque in et sem vel interdum.
          </Body>
          <Link href="/">Les mer</Link>
        </article>
        <article>
          <Heading tag="h2" size="medium">
            Støtt oss
          </Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            parturient pellentesque platea vulputate sed ut pellentesque
            pulvinar. Rutrum facilisis in tellus nulla a eget pulvinar risus
            amet. Semper nisi, diam odio sollicitudin. Sagittis, quis enim sed
            quam nisi. Auctor posuere facilisis neque, scelerisque ac habitant.
            Aliquam praesent pellentesque in et sem vel interdum.
          </Body>
          <Link href="/">Bli medlem</Link>
        </article>
      </Content>
      <Content className={styles.Section}>
        <article>
          <Heading tag="h2" size="medium">
            Aktuelt
          </Heading>
          <div className={styles.Cards}>
            {articles.map((it) => (
              <article key={it.slug} className={styles.Card}>
                <img alt="" src={`${it.imageUrl}?h=400`} />
                <Body suppressHydrationWarning className={styles.Date}>
                  {new Date(it.published).toLocaleDateString()}
                </Body>
                <Heading tag="h3" size="small">
                  {it.title}
                </Heading>
                <Link href={`/aktuelt/${it.slug}`}>Les mer</Link>
              </article>
            ))}
          </div>
        </article>
      </Content>
    </Main>
    <Footer />
  </PageContainer>
)

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const props = await client.fetch(`
    { 
      "hero": *[_type == "hero"][0].text,
      "articles": *[_type == "article"] | order(published desc) {
        title,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        published
      }
    }
  `)

  return {
    props: props,
  }
}

export default Home
