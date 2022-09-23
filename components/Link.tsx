import React from "react"
import classNames from "classnames"

import styles from "./Link.module.css"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  disabled,
  ...anchorProps
}) => {
  return (
    <a
      className={classNames(
        styles.link,
        disabled && styles.disabled,
        className,
      )}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
