import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"

import styles from "./Link.module.css"

const isActive = (pathname: string, href: string): boolean => {
  return decodeURI(pathname).split("/").pop() === href.split("/").pop()
}

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...linkProps
}) => {
  const { asPath } = useRouter()
  return (
    <a
      className={classNames(
        styles.link,
        isActive(asPath, linkProps.href) && styles.active,
        className,
      )}
      {...linkProps}
    >
      {children}
    </a>
  )
}
