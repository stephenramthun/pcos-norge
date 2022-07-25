import React from "react"
import classNames from "classnames"

import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { LinkButton } from "@components/LinkButton"

import styles from "components/Hero.module.css"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  text: string
}

export const Hero: React.VFC<HeroProps> = ({ text, className }) => {
  return (
    <Content className={classNames(styles.Hero, className)}>
      <div className={styles.HeroText}>
        <Heading tag="h1" size="large">
          {text}
        </Heading>
        <LinkButton href="/hva-er-pcos">Les mer</LinkButton>
      </div>
    </Content>
  )
}
