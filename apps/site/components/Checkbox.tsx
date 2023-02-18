import React from "react"
import classNames from "classnames"

import styles from "./Checkbox.module.css"

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "children"
  > {
  label: React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  ...inputProps
}) => {
  return (
    <label className={classNames(styles.label, className)}>
      <input {...inputProps} type="checkbox" />
      {label}
    </label>
  )
}
