import React from "react"
import classNames from "classnames"
import { CheckCircle, WarningCircle } from "@phosphor-icons/react"

import styles from "./Alert.module.css"

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
  variant: "success" | "error"
}

export const Alert: React.FC<Props> = ({
  variant = "success",
  className,
  children,
  ...divProps
}) => {
  return (
    <div
      role="alert"
      className={classNames(styles.container, className)}
      {...divProps}
    >
      {variant === "success" && <CheckCircle weight="fill" size={28} />}
      {variant === "error" && <WarningCircle weight="fill" size={28} />}
      {children}
    </div>
  )
}
