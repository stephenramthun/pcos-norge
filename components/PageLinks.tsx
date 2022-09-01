import React from "react"

import { Link } from "@components/Link"

import styles from "./PageLinks.module.css"

interface PageLinksProps {
  left: ArticleLink
  right: ArticleLink
}

export const PageLinks: React.FC<PageLinksProps> = ({ left, right }) => {
  return (
    <div className={styles.PageLinks}>
      {left ? (
        <Link className={styles.LeftLink} href={left.slug}>
          {"<<"} {left.title}
        </Link>
      ) : (
        <span />
      )}
      {right ? (
        <Link className={styles.RightLink} href={right.slug}>
          {right.title} {">>"}
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
