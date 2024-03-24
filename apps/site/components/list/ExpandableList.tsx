import { ArrowDown, ArrowUp } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { ReactNode, useState } from "react"

import { Button } from "components/Button"

import styles from "./List.module.css"

const MAX_ELEMENTS = 6

type Props = React.HTMLAttributes<HTMLUListElement> & {
  children: ReactNode[]
}

export const ExpandableList: React.FC<Props> = ({
  children,
  className,
  ...listProps
}) => {
  const [isCompact, setIsCompact] = useState(children.length > MAX_ELEMENTS)

  const childElements = isCompact ? children.slice(0, MAX_ELEMENTS) : children

  return (
    <ul className={classNames(styles.list, className)} {...listProps}>
      {childElements}
      {children.length > MAX_ELEMENTS && (
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
