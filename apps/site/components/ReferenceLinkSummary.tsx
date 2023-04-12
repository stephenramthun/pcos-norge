import React from "react"
import classNames from "classnames"
import { ArrowSquareOut } from "@phosphor-icons/react"

import { Link } from "components/Link"
import { UseReferenceLinksResult } from "hooks/useReferenceLinks"

import styles from "./ReferenceLinkSummary.module.css"

const ReferenceLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, children, ...anchorProps }) => {
  return (
    <Link href={href} target="_blank" {...anchorProps}>
      <div>{children}</div>
      <ArrowSquareOut />
    </Link>
  )
}

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
      className={classNames(styles.container, className)}
      {...elementProps}
    >
      <ol>
        {Object.entries(links)
          .sort((a, b) => a[1].index - b[1].index)
          .map(([key, it]) => (
            <li key={key}>
              <ReferenceLink id={key} href={it.value}>
                {it.children}
              </ReferenceLink>
            </li>
          ))}
      </ol>
    </aside>
  )
}
