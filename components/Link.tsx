import React from "react"
import classNames from "classnames"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "phosphor-react"

import styles from "./Link.module.css"

type Direction = "up" | "right" | "down" | "left"

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  arrow?: Direction
}

export const Link: React.FC<LinkProps> = ({
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
        case undefined:
          return null
      }
    })()}
  </a>
)
