import React from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"
import classNames from "classnames"

import styles from "./VippsButton.module.css"
import registerIcon from "@public/register_in_with_vipps_rect_250_NO@3x.png"
import loginIcon from "@public/log_in_with_vipps_rect_250_NO@3x.png"

const getImageSource = (variant: "register" | "login"): string => {
  switch (variant) {
    case "register":
      return registerIcon.src
    case "login":
      return loginIcon.src
  }
}

interface VippsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "register" | "login"
  callbackUrl?: string
}

export const VippsButton: React.FC<VippsButtonProps> = ({
  variant,
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
        src={getImageSource(variant)}
        alt=""
        width="250"
        height="44"
        loader={({ src }) => src}
        unoptimized
      />
    </button>
  )
}
