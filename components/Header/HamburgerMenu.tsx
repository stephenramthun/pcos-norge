import React, { useState } from "react"
import classNames from "classnames"
import styles from "./HamburgerMenu.module.css"
import { List } from "phosphor-react"

interface HamburgerMenuProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children"> {}

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
        className,
        open && styles.active,
      )}
      aria-label="Menu"
      onClick={toggleOpen}
      {...buttonProps}
    >
      <List size={32} />
    </button>
  )
}
