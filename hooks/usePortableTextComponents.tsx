import React from "react"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { PortableTextBlock } from "@portabletext/types"
import {
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react"

import { useReferenceLinks } from "@hooks/useReferenceLinks"
import { Heading } from "@components/Heading"
import { Body } from "@components/Body"
import { Link } from "@components/Link"
import { FactBox } from "@components/FactBox"
import { client } from "io/sanity"

import styles from "./usePortableTextComponents.module.css"

const ImageComponent: React.VFC<
  PortableTextTypeComponentProps<SanityImageObject>
> = ({ value }) => {
  const imageProps = useNextSanityImage(client, value.asset._ref)

  return (
    <div className={styles.ImageContainer}>
      <Image {...imageProps} alt="" layout="responsive" />
    </div>
  )
}

export const usePortableTextComponents = (
  body: Array<PortableTextBlock>,
): Partial<PortableTextReactComponents> => {
  const referenceLinks = useReferenceLinks(body)
  console.log("ref", body)
  return {
    types: {
      image: ImageComponent,
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
