import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Link } from "./Link"

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
  <div className={classNames(styles.PersonCard)} {...divProps}>
    <img alt={`${name}, ${capacity}`} src={imageSrc ?? avatar.src} />
    <p>{capacity}</p>
    <p>{name}</p>
    {link && (
      <Link href={link} arrow="right" className={styles.Link}>
        Les mer
      </Link>
    )}
  </div>
)
