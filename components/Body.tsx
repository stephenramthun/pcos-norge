import React from "react"
import classNames from "classnames"

import styles from "./Body.module.css"

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Body: React.FC<BodyProps> = ({
  className,
  children,
  ...paragraphProps
}) => (
  <p className={classNames(styles.Body, className)} {...paragraphProps}>
    {children}
  </p>
)
