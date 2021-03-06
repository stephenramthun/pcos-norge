import React from "react"
import classNames from "classnames"

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
    { className: classNames(styles.Content, className), ...divProps },
    children,
  )
