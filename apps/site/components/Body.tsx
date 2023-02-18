import React from "react"
import classNames from "classnames"

import styles from "./Body.module.css"

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Body: React.FC<BodyProps> = ({
  className,
  children,
  ...paragraphProps
}) => {
  return (
    <p className={classNames(styles.text, className)} {...paragraphProps}>
      {children}
    </p>
  )
}
