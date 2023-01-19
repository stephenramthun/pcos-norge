import React, { useState } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"

import { Logo } from "../Logo"
import { Link } from "./Link"
import { HamburgerMenu } from "./HamburgerMenu"
import { useSession } from "next-auth/react"
import { UserCircle } from "phosphor-react"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.VFC<HeaderProps> = ({
  className,
  ...headerProps
}) => {
  const [showNav, setShowNav] = useState(false)
  const { status } = useSession()

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
          {status !== "loading" && (
            <>
              <Link href="/hva-er-pcos">Hva er PCOS</Link>
              <Link href="/om-oss">Om oss</Link>
              <Link href="/aktuelt">Aktuelt</Link>
              <Link href="/bidra">Bidra</Link>
              {status === "unauthenticated" && (
                <Link href="/bli-medlem" className={styles.link}>
                  Bli medlem
                </Link>
              )}
              {status === "authenticated" && (
                <Link href="/min-side" className={styles.link}>
                  Min side <UserCircle size={24} />
                </Link>
              )}
            </>
          )}
        </nav>
        <HamburgerMenu onClick={() => setShowNav((prevState) => !prevState)} />
      </div>
    </header>
  )
}
