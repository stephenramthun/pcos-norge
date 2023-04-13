import React from "react"

import { Body } from "components/Body"
import { Heading } from "components/Heading"

import styles from "./min-side.module.css"

interface WelcomeDialogProps {
  givenName: string
}

export const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ givenName }) => {
  return (
    <article className={styles.welcomeDialog}>
      <Heading tag="p" size="medium-large">
        Velkommen, {givenName}! 🎉
      </Heading>
      <Body>Tusen takk for tilliten!</Body>
      <Body>
        Med ditt bidrag hjelper du oss i vårt arbeid for økt oppmerksomhet rundt
        diagnosen og å bedre helsetilbudet for mennesker med PCOS i Norge.
      </Body>
    </article>
  )
}
