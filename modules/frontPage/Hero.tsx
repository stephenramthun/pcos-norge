import styles from "./Hero.module.css"
import { Heading } from "../../components/Heading"
import { Content } from "../../components/Content"
import React from "react"
import { ArrowDown } from "phosphor-react"

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
        <button
          className={styles.ScrollButton}
          onClick={(event) => {
            event.preventDefault()
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Les mer
          <ArrowDown weight="bold" />
        </button>
      </div>
      <img
        alt="Kvinne som sitter smilende med beina i kryss"
        src="/hero-image.svg"
        width={500}
        height={500}
        className={styles.HeroImage}
      />
    </Content>
  )
}
