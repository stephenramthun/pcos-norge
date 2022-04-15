import React from "react"
import classNames from "classnames"
import { PortableTextBlock } from "@portabletext/types"
import { PortableTextReactComponents } from "@portabletext/react"

import { useReferenceLinks } from "@hooks/useReferenceLinks"
import { Heading } from "@components/Heading"
import { Body } from "@components/Body"
import { Link } from "@components/Link"

import styles from "./usePortableTextComponents.module.css"

export const usePortableTextComponents = (
  body: Array<PortableTextBlock>,
): Partial<PortableTextReactComponents> => {
  const referenceLinks = useReferenceLinks(body)
  return {
    block: {
      h1: ({ children }) => (
        <div className={styles.HeroText}>
          <Heading size="medium-large" tag="h1">
            {children}
          </Heading>
        </div>
      ),
      h2: ({ children }) => (
        <Heading className={styles.Content} tag="h2" size="small">
          {children}
        </Heading>
      ),
      normal: ({ children }) => (
        <Body className={classNames(styles.Content, styles.Body)}>
          {children}
        </Body>
      ),
    },
    marks: {
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
