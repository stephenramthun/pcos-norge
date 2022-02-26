import React from "react"

import { Body } from "@components/Body"
import { Heading } from "@components/Heading"
import { ArrowLink } from "@components/ArrowLink"

import styles from "./ArticleCard.module.css"

interface ArticleCardProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  slug: string
  title: string
  imageUrl: string
  published: Date
}

export const ArticleCard: React.VFC<ArticleCardProps> = ({
  slug,
  title,
  imageUrl,
  published,
  ...divProps
}) => {
  return (
    <div {...divProps}>
      <article key={slug} className={styles.ArticleCard}>
        <img alt="" src={`${imageUrl}?h=400`} />
        <Body suppressHydrationWarning className={styles.Date}>
          {new Date(published).toLocaleDateString()}
        </Body>
        <Heading tag="h3" size="small">
          {title}
        </Heading>
        <ArrowLink href={`/aktuelt/${slug}`}>Les mer</ArrowLink>
        <a href={`/aktuelt/${slug}`} className={styles.CardLink} />
      </article>
    </div>
  )
}
