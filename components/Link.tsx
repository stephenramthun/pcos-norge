import React from "react"
import classNames from "classnames"

import styles from "./Link.module.css"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "phosphor-react"

type Direction = "up" | "right" | "down" | "left"

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  arrow?: Direction
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  arrow,
  ...linkProps
}) => (
  <a
    className={classNames(styles.Link, className, arrow && styles[arrow])}
    {...linkProps}
  >
    {children}
    {(() => {
      const size = 28
      switch (arrow) {
        case "up":
          return <ArrowUp weight="bold" size={size} />
        case "right":
          return <ArrowRight weight="bold" size={size} />
        case "down":
          return <ArrowDown weight="bold" size={size} />
        case "left":
          return <ArrowLeft weight="bold" size={size} />
        case undefined:
          return null
      }
    })()}
  </a>
)
