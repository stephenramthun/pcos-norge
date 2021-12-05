import React from "react"
import classNames from "classnames"

import styles from "./Main.module.css"

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

export const Main: React.FC<MainProps> = ({
  className,
  children,
  ...elementProps
}) => (
  <main className={classNames(styles.Main, className)} {...elementProps}>
    {children}
  </main>
)
