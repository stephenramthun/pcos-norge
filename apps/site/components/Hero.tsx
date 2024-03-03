import { Person } from "@phosphor-icons/react"
import React from "react"

import { ArrowLink } from "components/ArrowLink"
import { Content } from "components/Content"
import { Heading } from "components/Heading"

import styles from "./Hero.module.css"

export const Hero: React.FC = () => (
  <Content className={styles.container}>
    <div className={styles.text}>
      <Heading tag="h1" size="large">
        PCOS rammer cirka 15 prosent av alle kvinner i verden
      </Heading>
      <ArrowLink href="#main" direction="down">
        Les mer
      </ArrowLink>
    </div>
    <div className={styles.illustration}>
      {Array(15)
        .fill(null)
        .map((_, i) => (
          <Person key={i} weight="fill" color="var(--color-brand-pink)" />
        ))}
      {Array(85)
        .fill(null)
        .map((_, i) => (
          <Person key={i} weight="fill" color="var(--color-brand-dark-teal)" />
        ))}
    </div>
  </Content>
)
