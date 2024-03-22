import { List, X } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { HTMLAttributes } from "react"

import styles from "./HamburgerMenu.module.css"

interface HamburgerMenuProps
  extends Childless<HTMLAttributes<HTMLButtonElement>> {
  isOpen: boolean
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  onClick,
  isOpen,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.button, isOpen && styles.active, className)}
      aria-label="Menu"
      onClick={onClick}
      {...buttonProps}
    >
      {isOpen ? <X size={32} /> : <List size={32} />}
    </button>
  )
}
