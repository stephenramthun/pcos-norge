import React from "react"
import classNames from "classnames"

import styles from "./Heading.module.css"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size: "small" | "medium" | "large"
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  type,
  size,
  ...headingProps
}) =>
  React.createElement(
    type,
    {
      className: classNames(styles.Heading, styles[size], className),
      ...headingProps,
    },
    children,
  )
