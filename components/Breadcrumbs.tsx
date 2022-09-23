import React from "react"
import classNames from "classnames"
import { CaretRight } from "phosphor-react"

import { Link } from "./Header"

import styles from "./Breadcrumbs.module.css"

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
  <div className={classNames(styles.container, className)} {...divProps}>
    {links.map((link, i) => (
      <React.Fragment key={i}>
        <span>
          <Link href={link.href}>{link.label}</Link>
          {i !== links.length - 1 && <CaretRight />}
        </span>
      </React.Fragment>
    ))}
  </div>
)
