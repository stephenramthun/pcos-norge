import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { ImageAsset } from "@sanity/types"

import { getClient } from "io/sanity/client"
import { SanityReference } from "@sanity/image-url/lib/types/types"

const isImageAsset = (
  asset: ImageAsset | SanityReference,
): asset is ImageAsset => {
  return asset._ref === undefined
}

interface SanityImageProps extends Omit<NextImageProps, "src" | "alt"> {
  asset: ImageAsset | SanityReference
  alt?: string
  layout?: NextImageProps["layout"]
  maxWidth?: number
}

export const SanityImage: React.FC<SanityImageProps> = ({
  asset,
  alt = "",
  layout = "responsive",
  maxWidth,
  ...imgProps
}) => {
  const imageProps = useNextSanityImage(
    getClient(),
    isImageAsset(asset) ? asset : asset._ref,
    maxWidth
      ? {
          imageBuilder: (builder, options) => {
            return builder
              .width(maxWidth)
              .quality(options.quality || 75)
              .fit("clip")
          },
        }
      : undefined,
  )

  return <NextImage {...imgProps} {...imageProps} alt={alt} layout={layout} />
}
