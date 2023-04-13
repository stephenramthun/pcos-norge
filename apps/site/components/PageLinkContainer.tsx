import React from "react"

import { ArrowLink } from "components/ArrowLink"
import { Body } from "components/Body"
import { Content } from "components/Content"
import { Heading } from "components/Heading"
import styles from "hooks/usePortableTextComponents.module.css"
import { SanityPageLink } from "types/sanity"

interface PageLinkContainerProps {
  links: SanityPageLink[]
}

export const PageLinkContainer: React.FC<PageLinkContainerProps> = ({
  links,
}) => {
  return (
    <Content className={styles.section}>
      {links.map((it, i) => (
        <article key={i}>
          <Heading tag="h2" size="medium">
            {it.title}
          </Heading>
          <Body className={styles.body}>{it.ingress}</Body>
          {it.callToAction && (
            <ArrowLink href={`/${it.callToAction.url}`}>
              {it.callToAction.linkText}
            </ArrowLink>
          )}
        </article>
      ))}
    </Content>
  )
}
