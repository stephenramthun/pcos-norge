import React from "react"
import classNames from "classnames"

import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary"
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  ...buttonProps
}) => (
  <button
    className={classNames(styles.button, styles[variant], className)}
    {...buttonProps}
  >
    {children}
  </button>
)
