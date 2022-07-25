import React from "react"
import { PortableTextReactComponents } from "@portabletext/react"

import { Hero } from "@components/Hero"
import { Image } from "@components/Image"
import { Content } from "@components/Content"
import { PeopleContainer } from "@components/PeopleContainer"
import { PageLinkContainer } from "@components/PageLinkContainer"
import { BlockContentContainer } from "@components/BlockContentContainer"

import { BodyText, ImageAsset, PageLinks, People } from "types/schema"

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
        return (
          <Content>
            <Image asset={value.asset} alt={value.alt} />
          </Content>
        )
      },
      bodyText: ({ value }: ComponentProps<BodyText>) => {
        return <BlockContentContainer blocks={value.content} />
      },
      people: ({ value }: ComponentProps<People>) => {
        return (
          <Content>
            <PeopleContainer people={value.people} />
          </Content>
        )
      },
    },
  }
}
