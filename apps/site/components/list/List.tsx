import classNames from "classnames"
import React, { ReactNode } from "react"

import styles from "./List.module.css"

type Props = React.HTMLAttributes<HTMLUListElement> & {
  children: ReactNode[]
}

export const List: React.FC<Props> = ({
  children,
  className,
  ...listProps
}) => {
  return (
    <ul className={classNames(styles.list, className)} {...listProps}>
      {children}
    </ul>
  )
}
