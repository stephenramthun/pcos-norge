import React from "react"

import { Logo } from "./Logo"
import { Body } from "./Body"
import { Content } from "./Content"
import { Link } from "components/Link"

import styles from "./Footer.module.css"

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <Content className={styles.content}>
      <Logo variant="light" priority={false} />
      <div>
        <article className={styles.details}>
          <div className={styles.grid}>
            <Body>Epost:</Body>
            <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>
            <Body>Adresse:</Body>
            <div className={styles.address}>
              <Body>c/o Regine Vinnes Wiig Andersen</Body>
              <Body>Mjåtveitstø 32</Body>
              <Body>5918 FREKHAUG</Body>
            </div>
            <Body>Org.nr:</Body>
            <Body>927 818 906</Body>
          </div>
          <Link className={styles.privacy} href="/personvernerklæring">
            Les personvernserklæringen vår
          </Link>
        </article>
        <article>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/hva-er-pcos">Hva er PCOS</Link>
              </li>
              <li>
                <Link href="/om-oss">Om oss</Link>
              </li>
              <li>
                <Link href="/aktuelt">Aktuelt</Link>
              </li>
              <li>
                <Link href="/bidra">Bidra</Link>
              </li>
              <li>
                <Link href="/min-side">Min side</Link>
              </li>
              <li>
                <Link href="/bli-medlem">Bli medlem</Link>
              </li>
            </ul>
          </nav>
        </article>
        <article>
          <Body className={styles.description}>
            PCOS Norge skal jobbe for mer synlighet, normalisering og
            oppmerksomhet rundt diagnosen blant folk flest og i media. Vi skal
            bidra til å enkelt tilgjengeliggjøre oppdatert og forskningsbasert
            informasjon om syndromet og sørge for bedre kunnskap i helsevesenet.
          </Body>
        </article>
      </div>
    </Content>
  </footer>
)
