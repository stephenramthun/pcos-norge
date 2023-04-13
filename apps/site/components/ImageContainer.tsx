import classNames from "classnames"
import React from "react"

import styles from "./ImageContainer.module.css"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const ImageContainer: React.FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
      {children}
    </div>
  )
}
