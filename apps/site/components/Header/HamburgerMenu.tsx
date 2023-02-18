import React, { HTMLAttributes, useState } from "react"
import classNames from "classnames"
import { List } from "phosphor-react"

import styles from "./HamburgerMenu.module.css"

interface HamburgerMenuProps
  extends Childless<HTMLAttributes<HTMLButtonElement>> {}

export const HamburgerMenu: React.VFC<HamburgerMenuProps> = ({
  className,
  onClick,
  ...buttonProps
}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setOpen((prevState) => !prevState)
    onClick?.(event)
  }

  return (
    <button
      className={classNames(styles.button, open && styles.active, className)}
      aria-label="Menu"
      onClick={toggleOpen}
      {...buttonProps}
    >
      <List size={32} />
    </button>
  )
}
