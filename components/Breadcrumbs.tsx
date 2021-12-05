import React from "react"
import classNames from "classnames"

import styles from "./Breadcrumbs.module.css"
import { CaretRight } from "phosphor-react"

type LinkObject = {
  href: string
  label: string
}

interface BreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  links: LinkObject[]
}

export const Breadcrumbs: React.VFC<BreadcrumbsProps> = ({
  className,
  links,
  ...divProps
}) => (
  <div className={classNames(styles.Breadcrumbs, className)}>
    {links.map((link, i) => (
      <React.Fragment key={i}>
        <a href={link.href}>{link.label}</a>
        {i !== links.length - 1 && <CaretRight />}
      </React.Fragment>
    ))}
  </div>
)
