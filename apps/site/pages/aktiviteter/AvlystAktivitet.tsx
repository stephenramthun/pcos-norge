import classNames from "classnames"
import React from "react"

import { Body } from "components/Body"

import { type Activity, formatActivityDates } from "./index.page"

import styles from "./aktiviteter.module.css"

type Props = {
  aktivitet: Activity
}

export const AvlystAktivitet: React.FC<Props> = ({ aktivitet }) => {
  return (
    <li className={styles.aktivitet}>
      <Body className={classNames(styles.time, styles.avlyst)}>
        {formatActivityDates(aktivitet.start, aktivitet.end)}
      </Body>
      <Body className={classNames(styles.title, styles.avlyst)}>
        {aktivitet.title}
      </Body>
      {aktivitet.description && (
        <Body className={styles.avlyst}>{aktivitet.description}</Body>
      )}
      {aktivitet.location && (
        <Body className={styles.avlyst}>{aktivitet.location}</Body>
      )}
      <Body>Avlyst</Body>
      <Body></Body>
    </li>
  )
}
