import classNames from "classnames"
import React, { forwardRef } from "react"

import styles from "./Checkbox.module.css"

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "children"
  > {
  label: React.ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...inputProps }, ref) => {
    return (
      <label className={classNames(styles.label, className)}>
        <input ref={ref} {...inputProps} type="checkbox" />
        {label}
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"
