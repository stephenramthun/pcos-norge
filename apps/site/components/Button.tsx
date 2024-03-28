import classNames from "classnames"
import React from "react"

import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive"
  size?: "normal" | "small"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "normal",
      ...buttonProps
    },
    ref,
  ) => (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        size !== "normal" && styles[size],
        className,
      )}
      ref={ref}
      {...buttonProps}
    >
      {children}
    </button>
  ),
)

Button.displayName = "Button"
