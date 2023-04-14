import classNames from "classnames"
import React from "react"

import styles from "./Heading.module.css"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  size: "extra-small" | "small" | "medium" | "medium-large" | "large"
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
      className: classNames(styles.heading, styles[size], className),
      ...headingProps,
    },
    children,
  )
