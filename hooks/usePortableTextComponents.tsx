import React from "react"
import { PortableTextBlock } from "@portabletext/types"
import { PortableTextReactComponents } from "@portabletext/react"

import { Body } from "@components/Body"
import { Link } from "@components/Link"
import { Image } from "@components/Image"
import { Heading } from "@components/Heading"
import { FactBox } from "@components/FactBox"
import { useReferenceLinks } from "@hooks/useReferenceLinks"

import { ImageAsset } from "types/schema"

import styles from "./usePortableTextComponents.module.css"

type ComponentProps<T> = {
  value: T
}

export const usePortableTextComponents = (
  body: Array<PortableTextBlock>,
): Partial<PortableTextReactComponents> => {
  const referenceLinks = useReferenceLinks(body)
  return {
    types: {
      imageAsset: ({ value }: ComponentProps<ImageAsset>) => {
        return <Image asset={value.asset} alt={value.alt} />
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
        return <ul className={styles.List}>{children}</ul>
      },
      number: ({ children }) => {
        return <ol className={styles.List}>{children}</ol>
      },
    },
    marks: {
      ingress: ({ children }) => {
        return <Body className={styles.Ingress}>{children}</Body>
      },
      link: ({ children, value }) => {
        return <Link href={value.href}>{children}</Link>
      },
      referenceLink: ({ value }) => {
        return (
          <a href={`#${value._key}`} className={styles.Link}>
            <sup>[{referenceLinks[value._key]?.index}]</sup>
          </a>
        )
      },
    },
  }
}
