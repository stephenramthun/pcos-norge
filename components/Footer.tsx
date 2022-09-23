import React from "react"

import styles from "./Footer.module.css"

import { Logo } from "./Logo"
import { Body } from "./Body"
import { Content } from "./Content"

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <Content className={styles.content}>
      <div className={styles.details}>
        <div>
          <Logo variant="light" className={styles.logo} />
          <span>
            <Body>Epost:</Body>
            <Body>post@pcosnorge.no</Body>
          </span>
          <span>
            <Body>Org.nr:</Body>
            <Body>927 818 906</Body>
          </span>
        </div>
        <div className={styles.description}>
          <Body>
            PCOS Norge skal jobbe for mer synlighet, normalisering og
            oppmerksomhet rundt diagnosen blant folk flest og i media. Vi skal
            bidra til å enkelt tilgjengeliggjøre oppdatert og forskningsbasert
            informasjon om syndromet og sørge for bedre kunnskap i helsevesenet.
          </Body>
        </div>
      </div>
    </Content>
  </footer>
)
