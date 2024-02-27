import React, { useRef } from "react"

import { ArticleObject } from "../types/sanity"
import { ArrowLink } from "components/ArrowLink"
import { ArticleCard } from "components/ArticleCard"
import { Heading } from "components/Heading"
import { HorizontalDragContainer } from "components/HorizontalDragContainer"

import styles from "./Articles.module.css"

type Props = {
  articles: Array<Omit<ArticleObject, "body">>
}

export const Articles: React.FC<Props> = ({ articles }) => {
  const ref = useRef<HTMLElement>(null)

  return (
    <article className={styles.articles} ref={ref}>
      <div className={styles.titleRow}>
        <Heading tag="h2" size="medium">
          Aktuelt
        </Heading>
        <ArrowLink href="aktuelt">Se flere saker</ArrowLink>
      </div>
      <HorizontalDragContainer className={styles.cards}>
        {articles.map((it) => (
          <ArticleCard
            key={it.slug}
            slug={it.slug}
            title={it.title}
            image={it.image}
            published={new Date(it.published)}
            className={styles.card}
          />
        ))}
      </HorizontalDragContainer>
    </article>
  )
}
