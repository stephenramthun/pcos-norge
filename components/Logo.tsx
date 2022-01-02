import React from "react"

import styles from "./Logo.module.css"

import logo from "../public/logo.svg"
import * as classNames from "classnames"

interface LogoProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> {}

export const Logo: React.VFC<LogoProps> = ({ className, ...anchorProps }) => (
  <a href="/" className={classNames(styles.Logo, className)}>
    <img width={133} height={25} alt="Logo PCOS Norge" src={logo.src} />
  </a>
)
