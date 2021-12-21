import React, { useEffect, useState } from "react"

import styles from "./Header.module.css"
import { Logo } from "./Logo"
import { Link } from "./Link"
import classNames from "classnames"
import { List } from "phosphor-react"

interface HamburgerMenuProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children"> {}

const HamburgerMenu: React.VFC<HamburgerMenuProps> = ({
  className,
  onClick,
  ...buttonProps
}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prevState) => !prevState)
    onClick?.(event)
  }

  return (
    <button
      className={classNames(
        styles.HamburgerMenu,
        className,
        open && styles.active,
      )}
      onClick={toggleOpen}
      {...buttonProps}
    >
      <List size={32} />
    </button>
  )
}

export const Header = () => {
  const [show, setShow] = useState(true)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    let previousScrollY = window.scrollY
    const onScroll = (event: Event) => {
      if (window.scrollY < previousScrollY || window.scrollY <= 0) {
        setShow(true)
      } else {
        setShow(false)
      }
      previousScrollY = window.scrollY
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header id="header" className={classNames(styles.Header)}>
      <div className={classNames(styles.Content, !show && styles.hide)}>
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
