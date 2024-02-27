import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from "@phosphor-icons/react"
import classNames from "classnames"
import React from "react"

import styles from "./ArrowLink.module.css"

type Direction = "up" | "right" | "down" | "left"

const iconForDirection = (direction: Direction) => {
  switch (direction) {
    case "up":
      return <ArrowUp weight="bold" size={24} />
    case "right":
      return <ArrowRight weight="bold" size={24} />
    case "down":
      return <ArrowDown weight="bold" size={24} />
    case "left":
      return <ArrowLeft weight="bold" size={24} />
  }
}

interface ArrowLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  direction?: Direction
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  className,
  children,
  direction = "right",
  ...linkProps
}) => (
  <a
    className={classNames(styles.link, styles[direction], className)}
    {...linkProps}
  >
    {children}
    {iconForDirection(direction)}
  </a>
)
