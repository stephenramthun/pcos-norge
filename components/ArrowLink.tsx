import React from "react"
import classNames from "classnames"
import { ArrowRight } from "phosphor-react"

import styles from "./ArrowLink.module.css"

interface ArrowLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  className,
  children,
  ...linkProps
}) => (
  <a className={classNames(styles.link, className)} {...linkProps}>
    {children}
    <ArrowRight weight="bold" size={24} />
  </a>
)
