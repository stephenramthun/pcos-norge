import React from "react"
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { PortableTextBlock } from "@portabletext/types"
import { PortableText } from "@portabletext/react"

import { client } from "io/sanity"
import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"
import { usePortableTextComponents } from "@hooks/usePortableTextComponents"

import styles from "./index.module.css"

type Page = {
  id: string
  title: string
  elements: Array<PortableTextBlock>
}

interface HomeProps {
  articles: Array<Omit<Article, "body">>
  content: Page
}

const Home: NextPage<HomeProps> = ({ articles, content }) => {
  console.log(content)

  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <Content className={styles.Section} id="about">
          <PortableText
            value={content.elements}
            components={usePortableTextComponents(content.elements)}
          />
          {/*<article>*/}
          {/*  <Heading tag="h2" size="medium">*/}
          {/*    Hva er PCOS*/}
          {/*  </Heading>*/}
          {/*  <PortableText*/}
          {/*    value={omPcos}*/}
          {/*    components={usePortableTextComponents([omPcos])}*/}
          {/*  />*/}
          {/*  <ArrowLink href="/hva-er-pcos">Les mer</ArrowLink>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <Heading tag="h2" size="medium">*/}
          {/*    Om oss*/}
          {/*  </Heading>*/}
          {/*  <PortableText*/}
          {/*    value={omOss}*/}
          {/*    components={usePortableTextComponents([omOss])}*/}
          {/*  />*/}
          {/*  <ArrowLink href="/om-oss">Les mer</ArrowLink>*/}
          {/*</article>*/}
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
      "articles": *[_type == "article"] | order(published desc) {
        title,
        "slug": slug.current,
        image,
        published,
        ingress
      },
      "content": *[_type == "page" && id.current == "forsiden"][0]
    }
  `)

  return {
    props: props,
  }
}

export default Home
