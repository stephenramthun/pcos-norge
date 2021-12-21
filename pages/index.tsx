import type { NextPage } from "next"
import Image from "next/image"
import React from "react"

import styles from "./index.module.css"

import { client } from "../config/sanity"

import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { Content } from "../components/Content"
import { Body } from "../components/Body"
import { Link } from "../components/Link"
import { Footer } from "../components/Footer"
import { Head } from "../components/Head"
import { PageContainer } from "../components/PageContainer"
import { Main } from "../components/Main"

interface HomeProps {
  hero: string
  articles: {
    slug: string
    title: string
    ingress: string
    published: string
  }[]
}

const Home: NextPage<HomeProps> = (props) => (
  <PageContainer>
    <Head />
    <Header />
    <Main>
      <Content className={styles.Hero}>
        <div className={styles.HeroText}>
          <Heading tag="h1" size="large">
            {props.hero}
          </Heading>
          <Link
            href=""
            onClick={(event) => {
              event.preventDefault()
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            arrow="down"
          >
            Les mer
          </Link>
        </div>
        <Image
          src="/hero-image.svg"
          width={400}
          height={600}
          className={styles.HeroImage}
        />
      </Content>
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
            {props.articles.map((it) => (
              <article key={it.slug} className={styles.Card}>
                <Body suppressHydrationWarning className={styles.Date}>
                  {new Date(it.published).toLocaleDateString()}
                </Body>
                <Heading tag="h3" size="small">
                  {it.title}
                </Heading>
                <Body>{it.ingress}</Body>
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

Home.getInitialProps = async (context): Promise<HomeProps> =>
  await client.fetch(`
    { 
      "hero": *[_type == "hero"][0].text,
      "articles": *[_type == "article"] | order(published desc) {
        title,
        ingress,
        "slug": slug.current,
        published
      }
    }
  `)

export default Home
