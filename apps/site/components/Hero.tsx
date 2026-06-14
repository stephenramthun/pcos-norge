import classNames from "classnames"
import React from "react"

import { Content } from "components/Content"
import { Heading } from "components/Heading"

import { LinkButton } from "./LinkButton"

import styles from "./Hero.module.css"

import logo from "public/pcos-norge-logo-teal.svg"

export const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...rest
}) => (
  <Content className={classNames(styles.container, className)} {...rest}>
    <div className={styles.illustration}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.src} alt="Logo" />
    </div>
    <div className={styles.text}>
      <Heading tag="h1" size="large">
        Polycystisk ovariesyndrom (PCOS) er nå Polyendokrint metabolsk
        ovarialsyndrom (PMOS)
      </Heading>
      <LinkButton
        href="/aktuelt/pcos-far-nytt-diagnosenavn"
        style={{
          ["--button-background" as any]: "var(--color-brand-dark-teal)",
        }}
      >
        Les mer
      </LinkButton>
    </div>
  </Content>
)
