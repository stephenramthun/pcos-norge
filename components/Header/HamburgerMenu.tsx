import React, { HTMLAttributes, useState } from "react"
import classNames from "classnames"
import styles from "./HamburgerMenu.module.css"
import { List } from "phosphor-react"

type HamburgerMenuProps = Childless<HTMLAttributes<HTMLButtonElement>> & {
  variant?: "light" | "dark"
}

export const HamburgerMenu: React.VFC<HamburgerMenuProps> = ({
  variant = "light",
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
        styles[variant],
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
