import React from "react"
import classNames from "classnames"
import Link from "next/link"
import Image from "next/image"

import styles from "./Logo.module.css"

import logoLight from "../public/logo.svg"
import logoDark from "../public/logo-dark.svg"

type LogoProps = Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  variant?: "light" | "dark"
  priority?: boolean
}

export const Logo: React.VFC<LogoProps> = ({
  variant = "dark",
  priority = true,
  className,
  ...anchorProps
}) => {
  return (
    <Link href="/">
      <a className={classNames(styles.container, className)} {...anchorProps}>
        <Image
          alt="Logo PCOS Norge"
          src={variant === "light" ? logoLight.src : logoDark.src}
          loader={({ src }) => src}
          layout="fill"
          className={styles.image}
          unoptimized
          priority={priority}
        />
      </a>
    </Link>
  )
}
