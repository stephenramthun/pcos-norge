import { ImageAsset } from "@sanity/types"
import Image, { ImageProps } from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import React from "react"

import { getClient } from "io/sanity/client"

interface SanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  asset: ImageAsset
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
    asset,
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
      unoptimized
      {...imageProps}
      {...imgProps}
      placeholder={asset.metadata ? "blur" : "empty"}
      blurDataURL={asset.metadata?.lqip}
      alt={alt}
      width={imgProps.fill ? undefined : width}
      height={imgProps.fill ? undefined : height}
    />
  )
}
