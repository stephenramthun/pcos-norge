import { ArrowRight } from "@phosphor-icons/react"
import { ImageAsset } from "@sanity/types"
import classNames from "classnames"
import React from "react"

import { SanityImageDocument } from "../types/sanity"
import { Body } from "components/Body"
import { Heading } from "components/Heading"
import { LinkButton } from "components/LinkButton"
import { SanityImage } from "components/SanityImage"

import styles from "./OmOssCard.module.css"

import block from "styles/block.module.css"

type Image = Omit<SanityImageDocument, "imageAsset"> & {
  asset: ImageAsset
  alt: string
}

type Props = {
  images: [Image, Image]
}

export const OmOssCard: React.FC<Props> = ({ images }) => (
  <article className={styles.omOss}>
    <div className={styles.imageContainer}>
      <div>
        <SanityImage
          asset={images[1].asset}
          alt={images[1].alt ?? ""}
          maxWidth={1000}
          fill
        />
      </div>
      <div>
        <SanityImage
          asset={images[0].asset}
          alt={images[0].alt ?? ""}
          maxWidth={1000}
          fill
        />
      </div>
    </div>
    <section className={classNames(styles.textContainer)}>
      <Heading tag="h2" size="medium" className={block.medium}>
        Vi jobber for dine rettigheter
      </Heading>
      <Body className={block.small}>
        PCOS Norge er en nyoppstartet landsdekkende forening for alle med PCOS,
        pårørende og helsevesen. Vi vil sette PCOS på dagsorden gjennom å
        formidle kunnskap og informasjon. Vi ønsker å være et forum som
        anerkjenner de daglige utfordringene til alle rammede og vi vil bidra
        til økt forståelse for diagnosen.
      </Body>
      <LinkButton href="/hva-er-pcos">
        Les mer om jobben vi gjør
        <ArrowRight size={24} />
      </LinkButton>
    </section>
  </article>
)
