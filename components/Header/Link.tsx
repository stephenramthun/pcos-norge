import React from "react"
import classNames from "classnames"

import styles from "./Link.module.css"
import { useRouter } from "next/router"

const isActive = (pathname: string, href: string): boolean =>
  pathname.split("/").pop() === href.slice(1)

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...linkProps
}) => {
  const { pathname } = useRouter()
  return (
    <a
      className={classNames(
        styles.Link,
        isActive(pathname, linkProps.href) && styles.active,
        className,
      )}
      {...linkProps}
    >
      {children}
    </a>
  )
}
