import classNames from "classnames"
import NextLink from "next/link"
import React, { useState } from "react"

import { Button } from "components/Button"
import { Logo } from "components/Logo"

import { HamburgerMenu } from "./HamburgerMenu"
import { Link } from "./Link"

import styles from "./Header.module.css"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "dark"
}

export const Header: React.FC<HeaderProps> = ({
  className,
  variant = "light",
  ...headerProps
}) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header
      id="header"
      className={classNames(styles.header, styles[variant], className)}
      {...headerProps}
    >
      <div className={classNames(styles.content)}>
        <Logo
          variant={variant === "dark" ? "light" : "dark"}
          className={styles.logo}
        />
        <nav
          role="navigation"
          aria-label="lenker"
          className={classNames(
            styles.nav,
            showNav ? styles.show : styles.hide,
          )}
        >
          <Link href="/hva-er-pcos">Hva er PCOS</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/aktuelt">Aktuelt</Link>
          <Link href="/bidra">Bidra</Link>
          <Link href="/min-side">Min side</Link>
          <NextLink href="/bli-medlem">
            <Button role="link">Bli medlem</Button>
          </NextLink>
        </nav>
        <HamburgerMenu onClick={() => setShowNav((prevState) => !prevState)} />
      </div>
    </header>
  )
}
