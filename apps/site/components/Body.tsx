import classNames from "classnames"
import React from "react"

import styles from "./Body.module.css"

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Body: React.FC<BodyProps> = ({
  className,
  children,
  ...paragraphProps
}) => (
  <p className={classNames(styles.text, className)} {...paragraphProps}>
    {children}
  </p>
)
