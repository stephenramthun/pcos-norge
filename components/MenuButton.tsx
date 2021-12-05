import React, { useState } from "react"
import classNames from "classnames"
import { List } from "phosphor-react"

import styles from "./MenuButton.module.css"

import { Button } from "./Button"
import { SlideMenu } from "./SlideMenu"

interface MenuButtonProps
  extends Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "children" | "onClick"
  > {}

export const MenuButton: React.VFC<MenuButtonProps> = ({
  className,
  ...buttonProps
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Button
        className={classNames(
          styles.MenuButton,
          expanded && styles.expanded,
          className,
        )}
        variant="tertiary"
        onClick={() => setExpanded((prevState) => !prevState)}
        {...buttonProps}
      >
        <List weight="bold" size="40" />
      </Button>
      <SlideMenu expanded={expanded} />
    </>
  )
}
