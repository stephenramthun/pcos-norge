import React from "react"
import classNames from "classnames"

import styles from "./Link.module.css"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...anchorProps
}) => {
  return (
    <a className={classNames(styles.Link, className)} {...anchorProps}>
      {children}
    </a>
  )
}
