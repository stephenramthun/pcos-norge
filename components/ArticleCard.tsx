import React from "react"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import type { SanityImageObject } from "@sanity/image-url/lib/types/types"

import { Body } from "@components/Body"
import { Heading } from "@components/Heading"
import { ArrowLink } from "@components/ArrowLink"

import { client } from "../config/sanity"

import styles from "./ArticleCard.module.css"

interface ArticleCardProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  slug: string
  title: string
  image: SanityImageObject
  published: Date
}

export const ArticleCard: React.VFC<ArticleCardProps> = ({
  slug,
  title,
  image,
  published,
  ...divProps
}) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: (imageUrlBuilder, options) =>
      imageUrlBuilder.width(options.width || 400).quality(100),
  })

  return (
    <div {...divProps}>
      <article key={slug} className={styles.ArticleCard}>
        <div className={styles.ImageContainer}>
          <Image {...imageProps} alt="" layout="intrinsic" unoptimized />
        </div>
        <Body suppressHydrationWarning className={styles.Date}>
          {new Date(published).toLocaleDateString()}
        </Body>
        <Heading tag="h3" size="small">
          {title}
        </Heading>
        <ArrowLink href={`/aktuelt/${slug}`}>Les mer</ArrowLink>
        <a
          href={`/aktuelt/${slug}`}
          className={styles.CardLink}
          aria-label={slug}
        >
          .
        </a>
      </article>
    </div>
  )
}
