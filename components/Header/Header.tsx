import React, { useState } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"

import { Logo } from "../Logo"
import { Link } from "./Link"
import { HamburgerMenu } from "./HamburgerMenu"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "dark"
}

export const Header: React.VFC<HeaderProps> = ({
  variant = "dark",
  className,
  ...headerProps
}) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header
      id="header"
      className={classNames(styles.Header, styles[variant], className)}
    >
      <div className={classNames(styles.Content)}>
        <Logo
          variant={variant === "light" ? "dark" : "light"}
          className={styles.Logo}
        />
        <nav
          className={classNames(
            styles.Nav,
            showNav ? styles.show : styles.hide,
          )}
        >
          <Link href="/om-pcos">Om PCOS</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/aktuelt">Aktuelt</Link>
          <Link href="/bli-medlem">Bli medlem</Link>
        </nav>
        <HamburgerMenu
          variant={variant === "light" ? "dark" : "light"}
          onClick={() => setShowNav((prevState) => !prevState)}
        />
      </div>
    </header>
  )
}
