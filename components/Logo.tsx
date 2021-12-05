import React from "react"
import Image from "next/image"

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
  background = "light",
  ...anchorProps
}) => (
  <a
    href="/"
    className={classNames(styles.Logo, styles[background], className)}
  >
    <Image
      src={background === "light" ? logo : logoInverted}
      height={35}
      width={60}
    />
    <Body>PCOS Norge</Body>
  </a>
)
