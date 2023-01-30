import React from "react"
import classNames from "classnames"

import styles from "./Input.module.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  children,
  ...inputProps
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input className={classNames(styles.input, className)} {...inputProps}>
        {children}
      </input>
    </label>
  )
}
