import React from "react"
import classNames from "classnames"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"

import { Body } from "@components/Body"
import { Heading } from "@components/Heading"
import { ArrowLink } from "@components/ArrowLink"
import { useLocaleDateString } from "@hooks/useLocaleDateString"

import { ImageAsset } from "types/schema"
import { getClient } from "io/sanity/client"

import styles from "./ArticleCard.module.css"

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
  const imageProps = useNextSanityImage(getClient(), image, {
    imageBuilder: (imageUrlBuilder, options) =>
      imageUrlBuilder.width(options.width || 400).quality(100),
  })

  const date = useLocaleDateString(published)

  return (
    <div {...divProps} className={classNames(styles.Container, className)}>
      <article key={slug} className={styles.ArticleCard}>
        <div className={styles.ImageContainer}>
          <Image {...imageProps} alt="" unoptimized />
        </div>
        <Body suppressHydrationWarning className={styles.Date}>
          {date}
        </Body>
        <Heading tag="h3" size="small">
          {title}
        </Heading>
        <Body>{ingress}</Body>
        <ArrowLink href={`/aktuelt/${slug}`}>Les mer</ArrowLink>
        <a
          href={`/aktuelt/${slug}`}
          className={styles.CardLink}
          aria-label={slug}
          tabIndex={-1}
        />
      </article>
    </div>
  )
}
