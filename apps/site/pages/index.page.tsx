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
import { ArticleObject } from "types/sanity"

import { Articles } from "./Articles"

import styles from "./index.module.css"

interface HomeProps {
  articles: Array<Omit<ArticleObject, "body">>
}

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <PageContainer>
      <Head />
      <Header variant="dark" />
      <Hero />
      <Main id="main">
        <Content className={styles.section}>
          <Articles articles={articles} />
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
    }
  `)

  return {
    props: props,
  }
}

export default Home
