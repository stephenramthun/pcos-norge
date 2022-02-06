import React, { HTMLAttributes, useState } from "react"
import classNames from "classnames"
import { List } from "phosphor-react"

import styles from "./HamburgerMenu.module.css"

type HamburgerMenuProps = Childless<HTMLAttributes<HTMLButtonElement>> & {}

export const HamburgerMenu: React.VFC<HamburgerMenuProps> = ({
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
        open && styles.active,
        className,
      )}
      aria-label="Menu"
      onClick={toggleOpen}
      {...buttonProps}
    >
      <List size={32} />
    </button>
  )
}
