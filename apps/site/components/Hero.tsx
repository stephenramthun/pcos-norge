import classNames from "classnames"
import React from "react"

import { Content } from "components/Content"
import { Heading } from "components/Heading"
import styles from "components/Hero.module.css"
import { LinkButton } from "components/LinkButton"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  text: string
}

export const Hero: React.FC<HeroProps> = ({ text, className }) => {
  return (
    <Content className={classNames(styles.container, className)}>
      <div className={styles.text}>
        <Heading tag="h1" size="large">
          {text}
        </Heading>
        <LinkButton href="/hva-er-pcos">Les mer</LinkButton>
      </div>
    </Content>
  )
}
