import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import React from "react"

import { getClient } from "io/sanity/client"
import { SanityImageAsset } from "types/sanity"

import styles from "./Likeperson.module.css"

import avatar from "public/avatar.svg"

type Props = {
  name: string
  picture?: SanityImageAsset
  region: string
}

export const Likeperson: React.FC<Props> = ({ name, picture, region }) => {
  const imageProps = useNextSanityImage(
    getClient(),
    picture ?? (avatar as string),
    {
      imageBuilder: (imageUrlBuilder, options) =>
        imageUrlBuilder.width(options.width || 400).quality(100),
    },
  )

  return (
    <div className={styles.card}>
      <Image
        {...imageProps}
        alt={`${name}, ${region}`}
        height={200}
        width={200}
        src={imageProps?.src || avatar.src}
        loader={imageProps?.loader || (({ src }) => src)}
        unoptimized
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.capacity}>{region}</p>
    </div>
  )
}
