import React from "react"
import Image from "next/image"
import classNames from "classnames"
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
import { Hero } from "@components/Hero"

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
  return {
    types: {
      image: ImageComponent,
      factBox: ({ value }) => {
        return <FactBox facts={value.facts} />
      },
      hero: ({ value }) => {
        return <Hero text={value.text} />
      },
    },
    block: {
      h1: ({ children }) => {
        return (
          <div className={styles.HeroText}>
            <Heading size="medium-large" tag="h1">
              {children}
            </Heading>
          </div>
        )
      },
      h2: ({ children }) => {
        return (
          <Heading className={styles.Content} tag="h2" size="small">
            {children}
          </Heading>
        )
      },
      normal: ({ children }) => {
        return (
          <Body className={classNames(styles.Content, styles.Body)}>
            {children}
          </Body>
        )
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
