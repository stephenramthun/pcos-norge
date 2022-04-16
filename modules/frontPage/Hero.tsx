import React from "react"

import { Heading } from "@components/Heading"
import { Content } from "@components/Content"
import { LinkButton } from "@components/LinkButton"

import styles from "./Hero.module.css"

interface HeroProps {
  text: string
}

export const Hero: React.VFC<HeroProps> = ({ text }) => {
  return (
    <Content className={styles.Hero}>
      <div className={styles.HeroText}>
        <Heading tag="h1" size="large">
          {text}
        </Heading>
        <LinkButton href="/om-pcos">Les mer</LinkButton>
      </div>
    </Content>
  )
}
