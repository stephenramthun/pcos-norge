import classNames from "classnames"
import React from "react"

import styles from "./LinkButton.module.css"

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  ...anchorProps
}) => {
  return (
    <a className={classNames(styles.button, className)} {...anchorProps}>
      {children}
    </a>
  )
}
