import React from "react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import type { SanityImageObject } from "@sanity/image-url/lib/types/types"

import { client } from "../io/sanity"

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
              Polycystisk ovariesyndrom (PCOS) er den vanligste endokrine
              forstyrrelsen hos kvinner. Tilstanden rammer 10-15% av alle
              kvinner og kan gi mange helseproblemer som følge av den hormonelle
              ubalansen. Kvinner med PCOS kan ha et bredt symptombilde som følge
              av høye androgennivåer, og syndromet kan påvirke det endokrine,
              metabolsk, reproduktive og emosjonelle ved kvinnen.
            </Body>
            <ArrowLink href="/om-pcos">Les mer</ArrowLink>
          </article>
          <article>
            <Heading tag="h2" size="medium">
              Om oss
            </Heading>
            <Body>
              PCOS Norge skal jobbe for mer synlighet, normalisering og
              oppmerksomhet rundt diagnosen blant folk flest og i media. Vi skal
              bidra til å enkelt tilgjengeliggjøre oppdatert og forskningsbasert
              informasjon om syndromet og sørge for bedre kunnskap i
              helsevesenet.
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
