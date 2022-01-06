import React from "react"
import classNames from "classnames"

import styles from "./Logo.module.css"

import logo from "../public/logo.svg"
import logoDark from "../public/logo-dark.svg"

type LogoProps = Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  variant?: "light" | "dark"
}

export const Logo: React.VFC<LogoProps> = ({
  variant = "light",
  className,
  ...anchorProps
}) => (
  <a href="/" className={classNames(styles.Logo, className)}>
    <img
      width={133}
      height={25}
      alt="Logo PCOS Norge"
      src={variant === "light" ? logo.src : logoDark.src}
    />
  </a>
)
