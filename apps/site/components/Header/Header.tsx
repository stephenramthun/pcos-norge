import classNames from "classnames"
import React, { useState } from "react"

import { LinkButton } from "components/LinkButton"
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
          className={classNames(styles.logo, showNav && styles.show)}
        />
        <nav
          role="navigation"
          aria-label="lenker"
          className={classNames(
            styles.nav,
            showNav ? styles.show : styles.hide,
          )}
        >
          <Link className={styles.link} href="/hva-er-pcos">
            Hva er PCOS
          </Link>
          <Link className={styles.link} href="/aktiviteter">
            Aktiviteter
          </Link>
          <Link className={styles.link} href="/om-oss">
            Om oss
          </Link>
          <Link className={styles.link} href="/aktuelt">
            Aktuelt
          </Link>
          <Link className={styles.link} href="/bidra">
            Bidra
          </Link>
          <Link className={styles.link} href="/min-side">
            Min side
          </Link>
          <LinkButton className={styles.memberLink} href="/bli-medlem">
            Bli medlem
          </LinkButton>
        </nav>
        <HamburgerMenu
          className={styles.menuButton}
          isOpen={showNav}
          onClick={() => setShowNav((prevState) => !prevState)}
        />
      </div>
    </header>
  )
}
