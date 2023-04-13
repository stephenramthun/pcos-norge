import React from "react"
import classNames from "classnames"

import { Body } from "components/Body"

import styles from "./ErrorMessage.module.css"

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ErrorMessage: React.FC<Props> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Body className={classNames(styles.message, className)} {...rest}>
      {children}
    </Body>
  )
}
