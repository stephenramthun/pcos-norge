import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"
import React from "react"

import { ArrowLink } from "components/ArrowLink"
import { Heading } from "components/Heading"

import styles from "./PcosIMediene.module.css"

type Artikkel = {
  href: string
  title: string
  type: string
  kilde: string
  publisert: string
}

type Props = {
  artikler: Artikkel[]
}

export const PcosIMediene: React.FC<Props> = ({ artikler }) => (
  <article className={styles.pcosIMediene}>
    <Heading className={styles.heading} tag="h2" size="medium">
      PCOS i mediene
    </Heading>
    <ul className={styles.artikler}>
      {artikler.map((it, i) => (
        <li key={i} className={styles.artikkel}>
          <Link className={styles.link} href={it.href} target="_blank">
            <span className={styles.linkDetails}>
              {`${it.publisert} | ${it.type}, ${it.kilde}`}
            </span>
            <span className={styles.linkTitle}>
              {it.title}
              <ArrowRight size={24} weight="bold" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
    <ArrowLink className={styles.alleArtiklerLink} href="/pcos-i-mediene">
      Se alle artikler
    </ArrowLink>
  </article>
)
