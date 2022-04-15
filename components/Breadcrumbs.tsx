import React from "react"
import classNames from "classnames"
import { CaretRight } from "phosphor-react"

import { Link } from "./Header/Link"

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
  <div className={classNames(styles.Breadcrumbs, className)} {...divProps}>
    {links.map((link, i) => (
      <React.Fragment key={i}>
        <Link href={link.href}>{link.label}</Link>
        {i !== links.length - 1 && <CaretRight />}
      </React.Fragment>
    ))}
  </div>
)
