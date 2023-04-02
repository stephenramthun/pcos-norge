import React, { useState } from "react"
import classNames from "classnames"
import NextLink from "next/link"

import { Logo } from "components/Logo"
import { Button } from "components/Button"
import { Link } from "./Link"
import { HamburgerMenu } from "./HamburgerMenu"

import styles from "./Header.module.css"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.FC<HeaderProps> = ({
  className,
  ...headerProps
}) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header
      id="header"
      className={classNames(styles.header, className)}
      {...headerProps}
    >
      <div className={classNames(styles.content)}>
        <Logo className={styles.logo} />
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
