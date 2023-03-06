import React from "react"
import { PortableTextBlock } from "@portabletext/types"
import { PortableTextReactComponents } from "@portabletext/react"

import { Body } from "components/Body"
import { Link } from "components/Link"
import { Heading } from "components/Heading"
import { FactBox } from "components/FactBox"
import { SanityImage } from "components/SanityImage"
import { useReferenceLinks } from "hooks/useReferenceLinks"
import { SanityImageAsset } from "types/sanity"

import styles from "./usePortableTextComponents.module.css"

type ComponentProps<T> = {
  value: T
}

export const usePortableTextComponents = (
  body: PortableTextBlock[],
): Partial<PortableTextReactComponents> => {
  const referenceLinks = useReferenceLinks(body)
  return {
    types: {
      imageAsset: ({ value }: ComponentProps<SanityImageAsset>) => {
        return (
          <span>
            <SanityImage
              className={styles.Image}
              asset={value.asset}
              alt={value.alt}
            />
            {value.text && (
              <Body className={styles.imageText}>{value.text}</Body>
            )}
          </span>
        )
      },
      factBox: ({ value }) => {
        return <FactBox facts={value.facts} />
      },
    },
    block: {
      h1: ({ children }) => {
        return (
          <Heading size="medium-large" tag="h1">
            {children}
          </Heading>
        )
      },
      h2: ({ children }) => {
        return (
          <Heading size="small" tag="h2">
            {children}
          </Heading>
        )
      },
      normal: ({ children }) => {
        return <Body>{children}</Body>
      },
    },
    list: {
      bullet: ({ children }) => {
        return <ul className={styles.list}>{children}</ul>
      },
      number: ({ children }) => {
        return <ol className={styles.list}>{children}</ol>
      },
    },
    marks: {
      ingress: ({ children }) => {
        return <span className={styles.ingress}>{children}</span>
      },
      link: ({ children, value }) => {
        return <Link href={value.href}>{children}</Link>
      },
      referenceLink: ({ value }) => {
        return (
          <a href={`#${value._key}`} className={styles.link}>
            <sup>[{referenceLinks[value._key]?.index}]</sup>
          </a>
        )
      },
    },
  }
}