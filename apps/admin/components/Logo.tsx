import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import logoDark from "../public/logo-dark.svg"
import logoLight from "../public/logo.svg"

import styles from "./Logo.module.css"

type LogoProps = Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  variant?: "light" | "dark"
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className,
  ...anchorProps
}) => {
  return (
    <Link href="/" legacyBehavior>
      <a className={classNames(styles.container, className)} {...anchorProps}>
        <Image
          alt="Logo PCOS Norge"
          src={variant === "light" ? logoLight.src : logoDark.src}
          loader={({ src }) => src}
          className={styles.image}
          unoptimized
          width={400}
          height={400}
        />
      </a>
    </Link>
  )
}
