import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"

import { ImageAsset } from "types/schema"
import { getClient } from "io/sanity/client"

interface ImageProps {
  asset: ImageAsset["asset"]
  alt: ImageAsset["alt"]
  layout?: NextImageProps["layout"]
}

export const Image: React.FC<ImageProps> = ({
  asset,
  alt,
  layout = "responsive",
}) => {
  const imageProps = useNextSanityImage(getClient(), asset._ref)

  return <NextImage {...imageProps} alt={alt} layout={layout} />
}
