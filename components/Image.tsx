import React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { client } from "io/sanity"
import { useNextSanityImage } from "next-sanity-image"

import { ImageAsset } from "types/schema"
import { Content } from "@components/Content"

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  asset: ImageAsset["asset"]
  alt: ImageAsset["alt"]
  layout?: NextImageProps["layout"]
}

export const Image: React.FC<ImageProps> = ({
  asset,
  alt,
  layout = "intrinsic",
  ...divProps
}) => {
  const imageProps = useNextSanityImage(client, asset._ref)

  return (
    <Content {...divProps}>
      <NextImage {...imageProps} alt={alt} layout={layout} />
    </Content>
  )
}
