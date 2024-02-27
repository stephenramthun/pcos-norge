import { Person } from "@phosphor-icons/react"
import classNames from "classnames"
import React from "react"

import { ArrowLink } from "components/ArrowLink"
import { Content } from "components/Content"
import { Heading } from "components/Heading"

import styles from "./Hero.module.css"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <Content className={classNames(styles.container, className)}>
      <div className={styles.frame}>
        <div className={styles.illustration}>
          {Array(15)
            .fill(null)
            .map((_, i) => (
              <Person key={i} weight="fill" color="var(--color-brand-pink)" />
            ))}
          {Array(85)
            .fill(null)
            .map((_, i) => (
              <Person
                key={i}
                weight="fill"
                color="var(--color-brand-dark-teal)"
              />
            ))}
        </div>
        <div className={styles.text}>
          <Heading tag="h1" size="large">
            PCOS rammer cirka 15 prosent av alle kvinner i verden
          </Heading>
          <ArrowLink href="#main" direction="down">
            Les mer
          </ArrowLink>
        </div>
      </div>
    </Content>
  )
}
