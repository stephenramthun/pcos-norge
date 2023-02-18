import React from "react"
import classNames from "classnames"

import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", ...buttonProps }, ref) => (
    <button
      className={classNames(styles.button, styles[variant], className)}
      ref={ref}
      {...buttonProps}
    >
      {children}
    </button>
  ),
)

Button.displayName = "Button"
