import React, { useState } from "react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"

import { Head } from "components/Head"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Content } from "components/Content"
import { Heading } from "components/Heading"
import { Breadcrumbs } from "components/Breadcrumbs"
import { ArticleCard } from "components/ArticleCard"
import { PageContainer } from "components/PageContainer"
import { FetchButton } from "components/FetchButton"

import { Article } from "types/schema"
import { fetchArticles } from "io/sanity/client"
import { usePreviewSubscription } from "io/sanity/preview"

import styles from "./aktuelt.module.css"

const articlesPerFetch = 6

interface AktueltProps {
  articles: Array<Article>
  remainingArticles: number
}

const Aktuelt: NextPage<AktueltProps & PreviewProps> = ({
  articles,
  remainingArticles,
  query,
  preview,
}) => {
  const { data: previewData } = usePreviewSubscription(query, {
    params: {},
    initialData: { articles, remainingArticles },
    enabled: preview,
  })

  const [state, setState] = useState<AktueltProps>(previewData)

  const fetchMoreArticles = async (): Promise<void> => {
    const { articles, remainingArticles } = await fetchArticles({
      from: state.articles.length,
      count: articlesPerFetch,
      preview,
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
            { label: "Hjem", href: "/" },
            { label: "Aktuelt", href: "/aktuelt" },
          ]}
        />
      </Content>
      <Content>
        <Heading size="medium-large" tag="h1">
          Aktuelt
        </Heading>
        <div className={styles.CardGrid}>
          {state.articles.map((it) => (
            <ArticleCard
              key={it.slug.current}
              slug={it.slug.current}
              title={it.title}
              image={it.image}
              published={new Date(it.published)}
              ingress={it.ingress}
              className={styles.Card}
            />
          ))}
        </div>
      </Content>
      {state.remainingArticles > 0 && (
        <Content className={styles.FetchMoreContainer}>
          <FetchButton onFetch={fetchMoreArticles}>
            Hent {Math.min(state.remainingArticles, articlesPerFetch)} flere
            saker
          </FetchButton>
        </Content>
      )}
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
}): Promise<GetStaticPropsResult<AktueltProps & { preview: boolean }>> => {
  const props = await fetchArticles({
    from: 0,
    count: articlesPerFetch,
    preview,
  })

  return {
    props: {
      ...props,
      preview,
    },
  }
}

export default Aktuelt
