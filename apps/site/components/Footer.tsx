import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import Image from "next/image"
import React from "react"

import { Link } from "components/Link"

import { Body } from "./Body"
import { Content } from "./Content"
import { Logo } from "./Logo"

import styles from "./Footer.module.css"

import bergesensLogo from "public/logo-bergesenstiftelsen.svg"
import bufdirLogo from "public/logo-bufdir.svg"
import kvinnehelsealliansen from "public/logo-kvinnehelsealliansen.svg"
import sanitetskvinneneLogo from "public/logo-sanitetskvinnene.svg"

export const Footer: React.FC = () => (
  <>
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
                <Body>c/o Ann Helen Brendehaug</Body>
                <Body>Gamlelinja 34C</Body>
                <Body>1254 Oslo</Body>
              </div>
              <Body>Org.nr:</Body>
              <Body>927 818 906</Body>
              <Body>Revisjon:</Body>
              <Link href="https://revisjonsor.no/" target="_blank">
                Revisjon Sør
              </Link>
            </div>
            <div className={styles.privacy}>
              <Link href="/personvernerklæring">
                Les personvernserklæringen vår
              </Link>
              <Body>
                Chat-gruppe:{" "}
                <Link
                  href="https://www.facebook.com/groups/623959381000578"
                  target="_blank"
                >
                  PCOS Søstre Norge
                </Link>
              </Body>
            </div>
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
                <li>
                  <Link href="/brosjyrer">Brosjyrer</Link>
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
    <Content className={styles.sponsors}>
      <div className={styles.logos}>
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
        <Link href="https://sanitetskvinnene.no/" target="_blank">
          <Image
            alt="Sanitetskvinnene"
            src={sanitetskvinneneLogo.src}
            height={100}
            width={300}
            unoptimized
            loader={({ src }) => src}
          />
        </Link>
        <Link
          href="https://sanitetskvinnene.no/nyheter/en-sterkere-stemme-kvinnehelse"
          target="_blank"
        >
          <Image
            alt="Kvinnehelsealliansen"
            src={kvinnehelsealliansen.src}
            height={65}
            width={220}
            unoptimized
            loader={({ src }) => src}
          />
        </Link>
        <Link href="https://www.bufdir.no/" target="_blank">
          <Image
            alt="Bufdir"
            src={bufdirLogo.src}
            height={65}
            width={65}
            unoptimized
            loader={({ src }) => src}
          />
        </Link>
      </div>
    </Content>
  </>
)
