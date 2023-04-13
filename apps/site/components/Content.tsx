import classNames from "classnames"
import React from "react"

import styles from "./Content.module.css"

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof HTMLElementTagNameMap
}

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  as = "section",
  ...divProps
}) =>
  React.createElement(
    as,
    { className: classNames(styles.content, className), ...divProps },
    children,
  )
