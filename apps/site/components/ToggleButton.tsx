import classNames from "classnames"
import React from "react"

import styles from "./ToggleButton.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  toggled?: boolean
}

export const ToggleButton: React.FC<Props> = ({
  toggled,
  className,
  ...rest
}) => (
  <button
    className={classNames(styles.button, toggled && styles.toggled, className)}
    {...rest}
  />
)
