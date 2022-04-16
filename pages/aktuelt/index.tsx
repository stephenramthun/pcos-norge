import React, { useState } from "react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Button } from "@components/Button"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"

import { fetchArticles } from "../../io/sanity"

import styles from "./aktuelt.module.css"

const articlesPerFetch = 6

interface AktueltProps {
  articles: Array<Article>
  remainingArticles: number
}

const Aktuelt: NextPage<AktueltProps> = ({ articles, remainingArticles }) => {
  const [state, setState] = useState<AktueltProps>({
    articles,
    remainingArticles,
  })

  const fetchMoreArticles = async (): Promise<void> => {
    const { articles, remainingArticles } = await fetchArticles({
      from: state.articles.length,
      count: articlesPerFetch,
    })

    setState((prevState) => ({
      articles: [...prevState.articles, ...articles],
      remainingArticles,
    }))
  }

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
        {state.articles.map((it) => (
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
      {state.remainingArticles > 0 && (
        <Content className={styles.FetchMoreContainer}>
          <Button onClick={fetchMoreArticles}>
            Hent {Math.min(state.remainingArticles, articlesPerFetch)} flere
            saker
          </Button>
        </Content>
      )}
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AktueltProps>
> => {
  const props = await fetchArticles({
    from: 0,
    count: articlesPerFetch,
  })

  return {
    props,
  }
}

export default Aktuelt
