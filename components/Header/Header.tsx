import React, { useState } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"

import { Logo } from "../Logo"
import { Link } from "../Link"
import { HamburgerMenu } from "./HamburgerMenu"
import { useOnScroll } from "../../hooks/useOnScroll"

type ScrollState = "start" | "down" | "up"

const useScrollState = (): ScrollState => {
  const [state, setState] = useState<ScrollState>("start")

  useOnScroll({
    delay: 100,
    callback: (current, previous) => {
      if (current <= 0) {
        setState("start")
      } else if (current > previous) {
        setState("down")
      } else {
        setState("up")
      }
    },
  })

  return state
}

export const Header = () => {
  const [showNav, setShowNav] = useState(false)

  const scrollState = useScrollState()

  return (
    <header
      id="header"
      className={classNames(styles.Header, styles[scrollState])}
    >
      <div className={classNames(styles.Content)}>
        <Logo />
        <nav
          className={classNames(
            styles.Nav,
            showNav ? styles.show : styles.hide,
          )}
        >
          <Link href="" arrow={undefined}>
            Om PCOS
          </Link>
          <Link href="" arrow={undefined}>
            Om oss
          </Link>
          <Link href="" arrow={undefined}>
            Aktuelt
          </Link>
          <Link href="" arrow={undefined}>
            Bli medlem
          </Link>
        </nav>
        <HamburgerMenu onClick={() => setShowNav((prevState) => !prevState)} />
      </div>
    </header>
  )
}
