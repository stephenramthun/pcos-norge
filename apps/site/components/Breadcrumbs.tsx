import { CaretRight } from "@phosphor-icons/react"
import classNames from "classnames"
import React from "react"

import { Body } from "components/Body"
import { Link } from "components/Header"

import styles from "./Breadcrumbs.module.css"

type LinkObject = {
  label: string
  href?: string
}

interface BreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  links: LinkObject[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className,
  links,
  ...divProps
}) => {
  return (
    <div className={classNames(styles.container, className)} {...divProps}>
      {links.map((link, i) => (
        <React.Fragment key={i}>
          <span>
            {link.href ? (
              <Link href={link.href}>{link.label}</Link>
            ) : (
              <Body>{link.label}</Body>
            )}
            {i !== links.length - 1 && <CaretRight />}
          </span>
        </React.Fragment>
      ))}
    </div>
  )
}
