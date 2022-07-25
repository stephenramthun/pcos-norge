import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { client } from "io/sanity"
import { useNextSanityImage } from "next-sanity-image"

import { ImageAsset } from "types/schema"

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
  const imageProps = useNextSanityImage(client, asset._ref)

  return <NextImage {...imageProps} alt={alt} layout={layout} />
}
