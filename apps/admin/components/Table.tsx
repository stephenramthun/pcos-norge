import classNames from "classnames"
import React from "react"

import styles from "./Table.module.css"

type Props = React.TableHTMLAttributes<HTMLTableElement>

export const Table: React.FC<Props> = ({
  className,
  children,
  ...tableProps
}) => {
  return (
    <table className={classNames(styles.table, className)} {...tableProps}>
      {children}
    </table>
  )
}
