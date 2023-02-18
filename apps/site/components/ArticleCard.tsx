import React from "react"
import classNames from "classnames"

import { Body } from "components/Body"
import { Heading } from "components/Heading"
import { ArrowLink } from "components/ArrowLink"
import { SanityImage } from "components/SanityImage"
import { useLocaleDateString } from "hooks/useLocaleDateString"
import { SanityImageAsset } from "types/sanity"

import styles from "./ArticleCard.module.css"

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string
  title: string
  image: SanityImageAsset
  published: Date
  ingress?: string
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  image,
  published,
  ingress,
  className,
  ...elementProps
}) => {
  const date = useLocaleDateString(published)

  return (
    <article
      key={slug}
      className={classNames(styles.article, className)}
      {...elementProps}
    >
      <div className={styles.imageContainer}>
        <SanityImage alt={image.alt ?? ""} asset={image.asset} />
      </div>
      <Body suppressHydrationWarning className={styles.date}>
        {date}
      </Body>
      <Heading tag="h3" size="small">
        {title}
      </Heading>
      <Body>{ingress}</Body>
      <ArrowLink href={`/aktuelt/${slug}`}>Les mer</ArrowLink>
      <a
        href={`/aktuelt/${slug}`}
        className={styles.cardLink}
        aria-label={slug}
        tabIndex={-1}
      />
    </article>
  )
}
