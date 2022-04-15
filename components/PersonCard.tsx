import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import Image from "next/image"

import { ArrowLink } from "./ArrowLink"

import styles from "./PersonCard.module.css"

import avatar from "@public/avatar.svg"

type PersonCardProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  name: string
  capacity: string
  imageSrc?: string
  link?: string
}

export const PersonCard: React.VFC<PersonCardProps> = ({
  name,
  capacity,
  imageSrc,
  link,
  className,
  ...divProps
}) => (
  <div className={classNames(styles.PersonCard, className)} {...divProps}>
    <Image alt={`${name}, ${capacity}`} src={imageSrc ?? avatar.src} />
    <p>{capacity}</p>
    <p>{name}</p>
    {link && (
      <ArrowLink href={link} arrow="right" className={styles.Link}>
        Les mer
      </ArrowLink>
    )}
  </div>
)
