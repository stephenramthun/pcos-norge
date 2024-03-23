import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import classNames from "classnames"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import React, { HTMLAttributes } from "react"

import { Link } from "components/Link"
import { getClient } from "io/sanity/client"

import styles from "./PersonCard.module.css"

import avatar from "public/avatar.svg"

type PersonCardProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  name: string
  capacity: string
  image?: Maybe<SanityImageObject>
  email?: string
}

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  capacity,
  image,
  email,
  className,
  ...divProps
}) => {
  const imageProps = useNextSanityImage(
    getClient(),
    image ?? (avatar as string),
    {
      imageBuilder: (imageUrlBuilder, options) =>
        imageUrlBuilder.width(options.width || 400).quality(100),
    },
  )

  return (
    <div className={classNames(styles.card, className)} {...divProps}>
      <Image
        {...imageProps}
        alt={`${name}, ${capacity}`}
        height={200}
        width={200}
        src={imageProps?.src || avatar.src}
        loader={imageProps?.loader || (({ src }) => src)}
        unoptimized
      />
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.name}>{name}</p>
      {email && (
        <Link href={`mailto:${email}`} className={styles.email}>
          {email}
        </Link>
      )}
    </div>
  )
}
