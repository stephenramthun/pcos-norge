import { SanityReference } from "@sanity/image-url/lib/types/types"
import { ImageAsset } from "@sanity/types"
import Image, { ImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import React from "react"

import { getClient } from "io/sanity/client"

const isImageAsset = (
  asset: ImageAsset | SanityReference,
): asset is ImageAsset => {
  return asset._ref === undefined
}

interface SanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  asset: ImageAsset | SanityReference
  alt?: string
  layout?: ImageProps["layout"]
  maxWidth?: number
}

export const SanityImage: React.FC<SanityImageProps> = ({
  asset,
  alt = "",
  maxWidth,
  ...imgProps
}) => {
  const { width, height, ...imageProps } = useNextSanityImage(
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

  return (
    <Image
      {...imageProps}
      {...imgProps}
      alt={alt}
      width={imgProps.fill ? undefined : width}
      height={imgProps.fill ? undefined : height}
    />
  )
}
