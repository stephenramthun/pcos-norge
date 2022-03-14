import React from "react"
import classNames from "classnames"

import { Link } from "@components/Link"
import { UseReferenceLinksResult } from "@hooks/useReferenceLinks"

import styles from "./ReferenceLinkSummary.module.css"
import { ArrowSquareOut } from "phosphor-react"

interface ReferenceLinkSummaryProps extends React.HTMLAttributes<HTMLElement> {
  links: UseReferenceLinksResult
}

export const ReferenceLinkSummary: React.VFC<ReferenceLinkSummaryProps> = ({
  links,
  className,
  ...elementProps
}) => {
  return (
    <aside
      className={classNames(styles.ReferenceLinkSummary, className)}
      {...elementProps}
    >
      <ol>
        {Object.entries(links)
          .sort((a, b) => a[1].index - b[1].index)
          .map(([key, it]) => (
            <li key={key}>
              <Link id={key} href={it.value} target="_blank">
                {it.children}
                <ArrowSquareOut />
              </Link>
            </li>
          ))}
      </ol>
    </aside>
  )
}
