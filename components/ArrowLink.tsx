import React from "react"
import classNames from "classnames"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "phosphor-react"

import styles from "./ArrowLink.module.css"

type Direction = "up" | "right" | "down" | "left"

interface ArrowLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  arrow?: Direction
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  className,
  children,
  arrow = "right",
  ...linkProps
}) => (
  <a
    className={classNames(styles.Link, className, arrow && styles[arrow])}
    {...linkProps}
  >
    {children}
    {(() => {
      const size = 24
      switch (arrow) {
        case "up":
          return <ArrowUp weight="bold" size={size} />
        case "right":
          return <ArrowRight weight="bold" size={size} />
        case "down":
          return <ArrowDown weight="bold" size={size} />
        case "left":
          return <ArrowLeft weight="bold" size={size} />
        default:
          return null
      }
    })()}
  </a>
)
