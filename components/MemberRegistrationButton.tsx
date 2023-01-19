import React from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"

import styles from "./MemberRegistrationButton.module.css"
import vippsIcon from "@public/log_in_with_vipps_pill_250_NO@2x.png"

export const MemberRegistrationButton: React.FC = () => {
  return (
    <button className={styles.button} onClick={() => signIn("vipps")}>
      <Image
        src={vippsIcon.src}
        alt=""
        width="250"
        height="44"
        loader={({ src }) => src}
      />
    </button>
  )
}
