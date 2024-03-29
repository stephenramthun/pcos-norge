import { ArrowRight } from "@phosphor-icons/react"
import { ImageAsset } from "@sanity/types"
import classNames from "classnames"
import React from "react"

import { SanityImageDocument } from "../types/sanity"
import { Body } from "components/Body"
import { Heading } from "components/Heading"
import { LinkButton } from "components/LinkButton"
import { SanityImage } from "components/SanityImage"

import styles from "./HvaErPcosCard.module.css"

import block from "styles/block.module.css"
import card from "styles/card.module.css"

type Image = Omit<SanityImageDocument, "imageAsset"> & {
  asset: ImageAsset
  alt: string
}

type Props = {
  image: Image
}

export const HvaErPcosCard: React.FC<Props> = ({ image }) => (
  <article className={styles.hvaErPcos}>
    <section className={classNames(styles.textContainer, card.medium)}>
      <Heading tag="h2" size="medium" className={block.medium}>
        Hva er PCOS?
      </Heading>
      <Body className={block.small}>
        Polycystisk ovariesyndrom (PCOS) er den vanligste hormonelle (endokrine)
        forstyrrelsen hos kvinner. Tilstanden rammer 10-15% av alle kvinner og
        kan gi mange helseproblemer som følge av den hormonelle ubalansen. Alle
        med PCOS opplever diagnosen forskjellig, men det finnes noen fellestrekk
        i symptombildet.
      </Body>
      <LinkButton href="/hva-er-pcos">
        Les mer om diagnosen
        <ArrowRight size={32} />
      </LinkButton>
    </section>
    <div className={styles.imageContainer}>
      <SanityImage
        asset={image.asset}
        alt={image.alt ?? ""}
        maxWidth={1000}
        fill
      />
    </div>
  </article>
)
