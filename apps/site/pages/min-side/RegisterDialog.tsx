import { useRouter } from "next/router"
import React from "react"

import { Body } from "components/Body"
import { VippsButton } from "components/VippsButton"
import { MembershipPrice } from "model/membershipPrice"

import styles from "./min-side.module.css"

interface RegisterDialogProps {
  givenName: string
}

export const RegisterDialog: React.FC<RegisterDialogProps> = ({
  givenName,
}) => {
  const router = useRouter()

  return (
    <article className={styles.registerDialog}>
      <Body className={styles.bold}>Hei, {givenName}</Body>
      <Body>
        Ønsker du å støtte oss i arbeidet vårt for et bedre helsetilbud for alle
        med PCOS i Norge? Forny medlemskapet ditt ved å klikke på knappen under.
      </Body>
      <Body>Medlemskap koster {MembershipPrice.asKroner},- per år.</Body>
      <VippsButton
        variant="register"
        onClick={() => router.push("/api/medlemskap/registrer")}
      />
    </article>
  )
}
