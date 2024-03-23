import { PortableTextReactComponents } from "@portabletext/react"
import { PortableTextBlock } from "@portabletext/types"
import React, { ReactNode } from "react"

import { Body } from "components/Body"
import { FactBox } from "components/FactBox"
import { Heading } from "components/Heading"
import { ImageContainer } from "components/ImageContainer"
import { Link } from "components/Link"
import { List } from "components/List"
import { PeopleContainer } from "components/PeopleContainer"
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
      imageAsset: ({ value }: ComponentProps<SanityImageAsset>) => (
        <>
          <ImageContainer>
            <SanityImage
              className={styles.image}
              asset={value.asset}
              alt={value.alt}
              fill
              maxWidth={2000}
              priority
            />
          </ImageContainer>
          {value.text && <Body className={styles.imageText}>{value.text}</Body>}
        </>
      ),
      factBox: ({ value }) => <FactBox facts={value.facts} />,
      people: ({ value }) => <PeopleContainer people={value.people} />,
    },
    block: {
      h1: ({ children }) => (
        <Heading size="medium-large" tag="h1">
          {children}
        </Heading>
      ),
      h2: ({ children }) => (
        <Heading size="small" tag="h2">
          {children}
        </Heading>
      ),
      h3: ({ children }) => (
        <Heading size="extra-small" tag="h3">
          {children}
        </Heading>
      ),
      normal: ({ children }) => <Body>{children}</Body>,
    },
    list: {
      bullet: ({ children }) => <List>{children as ReactNode[]}</List>,
      number: ({ children }) => <ol className={styles.list}>{children}</ol>,
    },
    marks: {
      ingress: ({ children }) => (
        <span className={styles.ingress}>{children}</span>
      ),
      link: ({ children, value }) => <Link href={value.href}>{children}</Link>,
      referenceLink: ({ value }) => (
        <a href={`#${value._key}`} className={styles.link}>
          <sup>[{referenceLinks[value._key]?.index}]</sup>
        </a>
      ),
    },
  }
}
