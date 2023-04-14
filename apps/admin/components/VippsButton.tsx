import classNames from "classnames"
import Image from "next/image"
import { signIn } from "next-auth/react"
import React from "react"

import styles from "./VippsButton.module.css"

import loginIcon from "public/log_in_with_vipps_rect_250_NO@3x.png"

interface VippsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  callbackUrl?: string
}

export const VippsButton: React.FC<VippsButtonProps> = ({
  callbackUrl,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={() => signIn("vipps", { callbackUrl })}
      type="button"
      {...buttonProps}
    >
      <Image
        src={loginIcon.src}
        alt=""
        width="250"
        height="44"
        loader={({ src }) => src}
        unoptimized
      />
    </button>
  )
}
