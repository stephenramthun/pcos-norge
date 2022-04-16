import React from "react"
import classNames from "classnames"
import Link from "next/link"
import Image from "next/image"

import styles from "./Logo.module.css"

import logoLight from "../public/logo.svg"
import logoDark from "../public/logo-dark.svg"

type LogoProps = Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  variant?: "light" | "dark"
}

export const Logo: React.VFC<LogoProps> = ({
  variant = "dark",
  className,
  ...anchorProps
}) => (
  <Link href="/">
    <a className={classNames(styles.Logo, className)} {...anchorProps}>
      <Image
        width={133}
        height={25}
        alt="Logo PCOS Norge"
        src={variant === "light" ? logoLight.src : logoDark.src}
        loader={({ src }) => src}
        unoptimized
      />
    </a>
  </Link>
)
