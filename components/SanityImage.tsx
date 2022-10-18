import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"

import { ImageAsset } from "types/schema"
import { getClient } from "io/sanity/client"
import { SanityImageAsset, SanityReference } from "sanity-codegen"

const isImageAsset = (
  asset: SanityReference<SanityImageAsset> | SanityImageAsset,
): asset is SanityImageAsset => {
  return (asset as SanityReference<SanityImageAsset>)._ref === undefined
}

interface SanityImageProps extends Omit<NextImageProps, "src"> {
  asset: ImageAsset["asset"] | SanityImageAsset
  alt: ImageAsset["alt"]
  layout?: NextImageProps["layout"]
}

export const SanityImage: React.FC<SanityImageProps> = ({
  asset,
  alt,
  layout = "responsive",
  ...imgProps
}) => {
  const imageProps = useNextSanityImage(
    getClient(),
    isImageAsset(asset) ? asset : asset._ref,
  )

  return <NextImage {...imgProps} {...imageProps} alt={alt} layout={layout} />
}
