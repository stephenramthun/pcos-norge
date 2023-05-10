import classNames from "classnames"
import React from "react"

import styles from "./Card.module.css"

type Props = React.HTMLAttributes<HTMLElement>

export const Card: React.FC<Props> = ({
  children,
  className,
  ...elementProps
}) => {
  return (
    <section
      className={classNames(styles.container, className)}
      {...elementProps}
    >
      {children}
    </section>
  )
}
