import React from "react"
import classNames from "classnames"

import styles from "./LinkButton.module.css"

interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.LinkButton, className)}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
