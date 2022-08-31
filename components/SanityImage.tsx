import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"

import { ImageAsset } from "types/schema"
import { getClient } from "io/sanity/client"

interface SanityImageProps extends Omit<NextImageProps, "src"> {
  asset: ImageAsset["asset"]
  alt: ImageAsset["alt"]
  layout?: NextImageProps["layout"]
}

export const SanityImage: React.FC<SanityImageProps> = ({
  asset,
  alt,
  layout = "responsive",
  ...imgProps
}) => {
  const imageProps = useNextSanityImage(getClient(), asset._ref)

  return <NextImage {...imgProps} {...imageProps} alt={alt} layout={layout} />
}
