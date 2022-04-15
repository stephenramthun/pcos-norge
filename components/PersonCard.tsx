import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { SanityImageObject } from "@sanity/image-url/lib/types/types"

import { client } from "../config/sanity"

import styles from "./PersonCard.module.css"

type PersonCardProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  name: string
  capacity: string
  image: SanityImageObject
}

export const PersonCard: React.VFC<PersonCardProps> = ({
  name,
  capacity,
  image,
  className,
  ...divProps
}) => {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: (imageUrlBuilder, options) =>
      imageUrlBuilder.width(options.width || 400).quality(100),
  })

  return (
    <div className={classNames(styles.PersonCard, className)} {...divProps}>
      <Image
        {...imageProps}
        alt={`${name}, ${capacity}`}
        height={200}
        width={200}
      />
      <span className={styles.Details}>
        <p className={styles.Capacity}>{capacity}</p>
        <p className={styles.Name}>{name}</p>
      </span>
    </div>
  )
}
