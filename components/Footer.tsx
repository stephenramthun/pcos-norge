import React from "react"

import styles from "./Footer.module.css"

import { Content } from "./Content"
import { Logo } from "./Logo"
import { Body } from "./Body"
import { Link } from "./Link"

export const Footer = () => (
  <footer className={styles.Footer}>
    <Content className={styles.Content}>
      <div className={styles.Details}>
        <div>
          <Logo className={styles.Logo} />
          <span>
            <Body>Epost:</Body>
            <Body>post@pcosnorge.no</Body>
          </span>
          <span>
            <Body>Org.nr:</Body>
            <Body>927 818 906</Body>
          </span>
        </div>
        <div className={styles.LinkGrid}>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/støtt-oss">Støtt oss</Link>
          <Link href="/personvern">Personvern</Link>
          <Link href="/personvern">Bli medlem</Link>
          <Link href="/personvern">Presse</Link>
          <Link href="/personvern">Aktuelt</Link>
        </div>
        <div className={styles.Description}>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            parturient pellentesque platea vulputate sed ut pellentesque
            pulvinar.
          </Body>
        </div>
      </div>
    </Content>
  </footer>
)
