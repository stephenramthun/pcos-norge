import classNames from "classnames"
import React from "react"

import styles from "./Main.module.css"

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

export const Main: React.FC<MainProps> = ({
  className,
  children,
  ...elementProps
}) => (
  <main className={classNames(styles.container, className)} {...elementProps}>
    {children}
  </main>
)
