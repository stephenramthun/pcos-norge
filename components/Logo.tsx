import React from "react"

import { Body } from "./Body"

import styles from "./Logo.module.css"

import logo from "../public/logo.svg"
import logoInverted from "../public/logo-inverted.svg"
import * as classNames from "classnames"

interface LogoProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> {
  background?: "light" | "dark"
}

export const Logo: React.VFC<LogoProps> = ({
  className,
  background = "dark",
  ...anchorProps
}) => (
  <a
    href="/"
    className={classNames(styles.Logo, styles[background], className)}
  >
    <img
      width={40}
      height={25}
      alt=""
      src={background === "light" ? logo.src : logoInverted.src}
    />
    <Body>PCOS Norge</Body>
  </a>
)
