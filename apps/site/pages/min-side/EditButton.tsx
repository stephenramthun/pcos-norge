import React from "react"
import classNames from "classnames"

import styles from "./EditButton.module.css"

interface EditButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const EditButton: React.FC<EditButtonProps> = ({
  className,
  ...buttonProps
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      {...buttonProps}
    />
  )
}
