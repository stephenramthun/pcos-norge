import classNames from "classnames"
import Link, { LinkProps } from "next/link"
import React from "react"

import { Body } from "components/Body"

import styles from "./MenuLink.module.css"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: LinkProps["href"]
  active: boolean
}

export const MenuLink: React.FC<Props> = ({
  children,
  className,
  active,
  ...anchorProps
}) => {
  return (
    <Link
      className={classNames(
        styles.container,
        active && styles.active,
        className,
      )}
      {...anchorProps}
    >
      <Body>{children}</Body>
    </Link>
  )
}
