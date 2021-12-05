import React from "react"
import classNames from "classnames"

import styles from "./Link.module.css"
import { ArrowRight } from "phosphor-react"

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...linkProps
}) => (
  <a className={classNames(styles.Link, className)} {...linkProps}>
    {children}
    <ArrowRight weight="bold" size={28} />
  </a>
)
