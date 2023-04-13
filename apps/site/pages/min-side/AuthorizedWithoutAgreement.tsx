import { signOut } from "next-auth/react"
import React from "react"

import { Body } from "components/Body"
import { Button } from "components/Button"

import styles from "./min-side.module.css"

export const AuthorizedWithoutAgreement: React.FC = () => {
  return (
    <>
      <div className={styles.grid}>
        <Body>Medlemskapsstatus</Body>
        <Body>Inaktiv</Body>
      </div>
      <hr />
      <span className={styles.buttons}>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Logg ut</Button>
      </span>
    </>
  )
}
