import React, { useState } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"

import { Logo } from "../Logo"
import { Link } from "./Link"
import { HamburgerMenu } from "./HamburgerMenu"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.VFC<HeaderProps> = ({
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
          className={classNames(
            styles.nav,
            showNav ? styles.show : styles.hide,
          )}
        >
          <Link href="/hva-er-pcos">Hva er PCOS</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/aktuelt">Aktuelt</Link>
        </nav>
        <HamburgerMenu onClick={() => setShowNav((prevState) => !prevState)} />
      </div>
    </header>
  )
}
