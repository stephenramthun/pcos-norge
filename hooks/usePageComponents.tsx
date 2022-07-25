import React from "react"
import { PortableTextReactComponents } from "@portabletext/react"

import { Hero } from "@components/Hero"
import { Image } from "@components/Image"
import { PageLinkContainer } from "@components/PageLinkContainer"
import { BodyText, ImageAsset, PageLinks } from "types/schema"
import { BlockContentContainer } from "@components/BlockContentContainer"

type ComponentProps<T> = {
  value: T
}

export const usePageComponents = (): Partial<PortableTextReactComponents> => {
  return {
    types: {
      hero: ({ value }) => {
        return <Hero text={value.text} />
      },
      pageLinks: ({ value }: ComponentProps<PageLinks>) => {
        return <PageLinkContainer links={value.links} />
      },
      imageAsset: ({ value }: ComponentProps<ImageAsset>) => {
        return <Image asset={value.asset} alt={value.alt} />
      },
      bodyText: ({ value }: ComponentProps<BodyText>) => {
        return <BlockContentContainer blocks={value.content} />
      },
    },
  }
}
