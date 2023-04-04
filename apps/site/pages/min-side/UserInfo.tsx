import React from "react"
import styles from "./min-side.module.css"
import { Body } from "components/Body"

interface Props {
  name: string
  streetAddress: string
  postalCode: string
  region: string
  email: string
}

export const UserInfo: React.FC<Props> = ({
  name,
  streetAddress,
  postalCode,
  region,
  email,
}) => {
  return (
    <div className={styles.grid}>
      <Body>Navn</Body>
      <Body>{name}</Body>
      <Body>Adresse</Body>
      <span className={styles.flexColumn}>
        <Body>{streetAddress}</Body>
        <Body>
          {postalCode} {region}
        </Body>
      </span>
      <Body>Epost</Body>
      <Body>{email}</Body>
    </div>
  )
}
