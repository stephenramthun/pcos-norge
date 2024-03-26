import { Newspaper } from "@phosphor-icons/react"
import classNames from "classnames"
import React from "react"

import { ArrowLink } from "components/ArrowLink"
import { Body } from "components/Body"
import { Heading } from "components/Heading"
import { SanityImage } from "components/SanityImage"
import { useLocaleDateString } from "hooks/useLocaleDateString"
import { SanityImageAsset } from "types/sanity"

import styles from "./ArticleCard.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  href: string
  title: string
  type: string
  kilde: string
  image?: SanityImageAsset
  published: Date
}

export const NyhetsartikkelCard: React.FC<Props> = ({
  href,
  title,
  type,
  kilde,
  image,
  published,
  className,
  ...elementProps
}) => {
  const date = useLocaleDateString(published)

  console.log(type, kilde)

  return (
    <article
      className={classNames(styles.article, className)}
      {...elementProps}
    >
      {image ? (
        <div className={styles.imageContainer}>
          <SanityImage
            alt={image.alt ?? ""}
            asset={image.asset}
            maxWidth={800}
            fill
          />
        </div>
      ) : (
        <div className={styles.imagePlaceholder}>
          <Newspaper />
        </div>
      )}
      <Body suppressHydrationWarning className={styles.date}>
        {date}
      </Body>
      <Heading tag="h2" size="small">
        {title}
      </Heading>
      <ArrowLink href={href} target="_blank">
        Les mer
      </ArrowLink>
      <a
        href={href}
        className={styles.cardLink}
        aria-label={href}
        tabIndex={-1}
        target="_blank"
        rel="noreferrer"
      />
    </article>
  )
}
