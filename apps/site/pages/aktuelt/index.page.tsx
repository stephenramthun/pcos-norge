import { GetServerSideProps, GetStaticPropsResult, NextPage } from "next"
import React, { useState } from "react"

import { isAktueltArtikkel, isArtikkelFilter } from "../../types/guards"
import { ArticleCard } from "components/ArticleCard"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { FetchButton } from "components/FetchButton"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { NyhetsartikkelCard } from "components/NyhetsartikkelCard"
import { PageContainer } from "components/PageContainer"
import { ToggleButton } from "components/ToggleButton"
import { fetchArticles } from "io/sanity/client"
import { usePreviewSubscription } from "io/sanity/preview"
import { ArticleObject, NyhetsartikkelObject } from "types/sanity"

import styles from "./aktuelt.module.css"

const ARTICLES_PER_FETCH = 12

interface AktueltProps {
  articles: (ArticleObject | NyhetsartikkelObject)[]
  remainingArticles: number
}

const Aktuelt: NextPage<
  AktueltProps & PreviewProps & { filter: ArtikkelFilter }
> = ({ articles, remainingArticles, query, preview, filter }) => {
  const { data: previewData } = usePreviewSubscription(query, {
    params: {},
    initialData: { articles, remainingArticles },
    enabled: preview,
  })

  const [state, setState] = useState<AktueltProps>(previewData)

  const fetchMoreArticles = async (): Promise<void> => {
    const { articles, remainingArticles } = await fetchArticles({
      from: state.articles.length,
      count: ARTICLES_PER_FETCH,
      preview: preview,
      filter: "alle",
    })

    setState((prevState) => ({
      articles: [...prevState.articles, ...articles],
      remainingArticles,
      filter,
    }))
  }

  return (
    <PageContainer>
      <Head title="Aktuelt | PCOS Norge" />
      <Header className={styles.header} />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Aktuelt", href: "/aktuelt" },
          ]}
        />
      </Content>
      <Content className={styles.content}>
        <Heading className={styles.heading} size="medium" tag="h1">
          Aktuelt
        </Heading>
        <div className={styles.filterButtons}>
          <ToggleButton
            onClick={() => {
              window.location.search = "filter=alle"
            }}
            toggled={filter === "alle"}
          >
            Alle
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              window.location.search = "filter=aktuelt"
            }}
            toggled={filter === "aktuelt"}
          >
            Aktuelt
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              window.location.search = "filter=i-nyhetene"
            }}
            toggled={filter === "i-nyhetene"}
          >
            I nyhetene
          </ToggleButton>
        </div>
        <div className={styles.grid}>
          {state.articles.map((it) =>
            isAktueltArtikkel(it) ? (
              <ArticleCard
                key={it.slug}
                slug={it.slug}
                title={it.title}
                image={it.image}
                published={new Date(it.published)}
                headingLevel="h2"
                className={styles.card}
              />
            ) : (
              <NyhetsartikkelCard
                key={it.href}
                href={it.href}
                title={it.title}
                type={it.type}
                kilde={it.kilde}
                image={it.image}
                published={new Date(it.published)}
              />
            ),
          )}
        </div>
      </Content>
      {state.remainingArticles > 0 && (
        <Content className={styles.fetchMore}>
          <FetchButton onFetch={fetchMoreArticles}>
            Hent {Math.min(state.remainingArticles, ARTICLES_PER_FETCH)} flere
            saker
          </FetchButton>
        </Content>
      )}
      <Footer />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
  query,
}): Promise<
  GetStaticPropsResult<
    AktueltProps & {
      preview: boolean
      filter: ArtikkelFilter
    }
  >
> => {
  const filter = isArtikkelFilter(query.filter) ? query.filter : "alle"

  const articles = await fetchArticles({
    from: 0,
    count: ARTICLES_PER_FETCH,
    preview,
    filter,
  })

  return {
    props: {
      ...articles,
      filter,
      preview,
    },
  }
}

export default Aktuelt
