import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import Image from "next/image"
import React from "react"

import { Link } from "components/Link"

import { Body } from "./Body"
import { Content } from "./Content"
import { Logo } from "./Logo"

import styles from "./Footer.module.css"

import bergesensLogo from "public/logo-bergesenstiftelsen.svg"

export const Footer: React.FC = () => (
  <>
    <Content className={styles.sponsors}>
      <Body>Våre støttespillere:</Body>
      <Link href="https://bergesenstiftelsen.no/" target="_blank">
        <Image
          alt="Bergesenstiftelsen"
          src={bergesensLogo.src}
          height={100}
          width={200}
          unoptimized
          loader={({ src }) => src}
        />
      </Link>
    </Content>
    <footer className={styles.container}>
      <Content className={styles.content}>
        <div className={styles.logoContainer}>
          <Logo variant="light" />
          <div className={styles.socials}>
            <Link
              href="https://www.facebook.com/pcosnorge"
              target="_blank"
              aria-label="PCOS Norge på Facebook"
            >
              <FacebookLogo size={32} />
            </Link>
            <Link
              href="https://www.instagram.com/pcosnorge/"
              target="_blank"
              aria-label="PCOS Norge på Instagram"
            >
              <InstagramLogo size={32} />
            </Link>
          </div>
        </div>
        <div className={styles.info}>
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
              informasjon om syndromet og sørge for bedre kunnskap i
              helsevesenet.
            </Body>
          </article>
        </div>
      </Content>
    </footer>
  </>
)
