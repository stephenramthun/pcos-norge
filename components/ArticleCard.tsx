import React from "react"
import { Body } from "@components/Body"
import { Heading } from "@components/Heading"
import { Link } from "@components/Link"

import styles from "./ArticleCard.module.css"

interface ArticleCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...anchorProps
}) => {
  return (
    <a {...anchorProps} href={`/aktuelt/${slug}`}>
      <article key={slug} className={styles.ArticleCard}>
        <img alt="" src={`${imageUrl}?h=400`} />
        <Body suppressHydrationWarning className={styles.Date}>
          {new Date(published).toLocaleDateString()}
        </Body>
        <Heading tag="h3" size="small">
          {title}
        </Heading>
        <Link href={`/aktuelt/${slug}`}>Les mer</Link>
      </article>
    </a>
  )
}
