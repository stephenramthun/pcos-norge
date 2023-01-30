import React from "react"
import classNames from "classnames"

import { Body } from "@components/Body"
import { Heading } from "@components/Heading"
import { ArrowLink } from "@components/ArrowLink"
import { useLocaleDateString } from "@hooks/useLocaleDateString"

import { ImageAsset } from "types/schema"

import styles from "./ArticleCard.module.css"
import { SanityImage } from "@components/SanityImage"

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string
  title: string
  image: ImageAsset
  published: Date
  ingress?: string
}

export const ArticleCard: React.VFC<ArticleCardProps> = ({
  slug,
  title,
  image,
  published,
  ingress,
  className,
  ...divProps
}) => {
  const date = useLocaleDateString(published)

  return (
    <div {...divProps} className={classNames(styles.container, className)}>
      <article key={slug} className={styles.article}>
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
    </div>
  )
}
