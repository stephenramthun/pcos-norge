import styles from "@hooks/usePortableTextComponents.module.css"
import { Heading } from "@components/Heading"
import { Body } from "@components/Body"
import { ArrowLink } from "@components/ArrowLink"
import { Content } from "@components/Content"
import React from "react"
import { PageLink } from "types/schema"

interface PageLinkContainerProps {
  links: Array<PageLink>
}

export const PageLinkContainer: React.FC<PageLinkContainerProps> = ({
  links,
}) => {
  return (
    <Content className={styles.Section}>
      {links.map((it, i) => (
        <article key={i}>
          <Heading tag="h2" size="medium">
            {it.title}
          </Heading>
          <Body className={styles.Body}>{it.ingress}</Body>
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
