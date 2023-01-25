import React from "react"
import classNames from "classnames"

import styles from "./Loader.module.css"

interface LoaderProps {
  variant?: "dark" | "light"
}

export const Loader: React.FC<LoaderProps> = ({ variant = "light" }) => {
  return (
    <div className={classNames(styles.loader, styles[variant])}>
      <div />
      <div />
      <div />
    </div>
  )
}
