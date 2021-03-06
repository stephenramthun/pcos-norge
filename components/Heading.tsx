import React from "react"
import classNames from "classnames"

import styles from "./Heading.module.css"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size: "small" | "medium" | "medium-large" | "large"
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  tag,
  size,
  ...headingProps
}) =>
  React.createElement(
    tag,
    {
      className: classNames(styles.Heading, styles[size], className),
      ...headingProps,
    },
    children,
  )
