import React from "react"

import styles from "./Header.module.css"

import { Button } from "./Button"
import { MenuButton } from "./MenuButton"
import { Logo } from "./Logo"

export const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Content}>
      <Logo />
      <Button>Bli medlem</Button>
      <MenuButton className={styles.MenuButton} />
    </div>
  </header>
)
