import { ArrowDown, ArrowUp } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { ReactNode, useState } from "react"

import { Button } from "components/Button"

import styles from "./List.module.css"

type Props = React.HTMLAttributes<HTMLUListElement> & {
  children: ReactNode[]
}

export const List: React.FC<Props> = ({
  children,
  className,
  ...listProps
}) => {
  const [isCompact, setIsCompact] = useState(children.length > 5)

  const childElements = isCompact ? children.slice(0, 6) : children

  return (
    <ul className={classNames(styles.list, className)} {...listProps}>
      {childElements}
      {children.length > 5 && (
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
      )}
    </ul>
  )
}
