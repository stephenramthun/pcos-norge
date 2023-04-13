import classNames from "classnames"
import React, { useState } from "react"

import { Button } from "components/Button"
import { Loader } from "components/Loader"

import styles from "./FetchButton.module.css"

interface FetchButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onFetch: () => Promise<Response | void>
}

export const FetchButton: React.FC<FetchButtonProps> = ({
  onFetch,
  className,
  children,
  ...buttonProps
}) => {
  const [isFetching, setIsFetching] = useState(false)

  const onClick = (): void => {
    setIsFetching(true)
    onFetch().finally(() => {
      setIsFetching(false)
    })
  }

  return (
    <Button
      onClick={onClick}
      disabled={isFetching}
      className={classNames(styles.button, className)}
      {...buttonProps}
    >
      {children} {isFetching && <Loader />}
    </Button>
  )
}
