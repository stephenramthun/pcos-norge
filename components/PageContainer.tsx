import React from "react"
import classNames from "classnames"

import styles from "./PageContainer.module.css"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageContainer: React.FC<PageContainerProps> = ({
  className,
  children,
  ...divProps
}) => (
  <div className={classNames(styles.PageContainer, className)} {...divProps}>
    {children}
  </div>
)
