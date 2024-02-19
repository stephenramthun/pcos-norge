import { ArrowDown, ArrowUp } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { useState } from "react"

import { Button } from "components/Button"

import styles from "./List.module.css"

type Props = React.HTMLAttributes<HTMLUListElement>

export const List: React.FC<Props> = ({
  children,
  className,
  ...listProps
}) => {
  const [isCompact, setIsCompact] = useState(
    Array.isArray(children) && children.length > 5,
  )

  const childElements =
    isCompact && Array.isArray(children) ? children.slice(0, 6) : children

  return (
    <div className={styles.container}>
      <ul className={classNames(styles.list, className)} {...listProps}>
        {childElements}
      </ul>
      <Button
        variant="tertiary"
        onClick={() => setIsCompact((prevState) => !prevState)}
      >
        {isCompact ? (
          <>
            <ArrowDown />
            Flere
          </>
        ) : (
          <>
            <ArrowUp />
            Færre
          </>
        )}
      </Button>
    </div>
  )
}
