import { PortableTextReactComponents } from "@portabletext/react"
import React from "react"

import { BlockContentContainer } from "components/BlockContentContainer"
import { Content } from "components/Content"
import { PageLinkContainer } from "components/PageLinkContainer"
import { PeopleContainer } from "components/PeopleContainer"
import { SanityImage } from "components/SanityImage"
import {
  SanityBodyText,
  SanityImageAsset,
  SanityPageLinks,
  SanityPeople,
} from "types/sanity"

type ComponentProps<T> = {
  value: T
}

export const getPortableTextComponents =
  (): Partial<PortableTextReactComponents> => ({
    types: {
      pageLinks: ({ value }: ComponentProps<SanityPageLinks>) => (
        <PageLinkContainer links={value.links} />
      ),
      imageAsset: ({ value }: ComponentProps<SanityImageAsset>) => (
        <Content>
          <SanityImage
            asset={value.asset}
            alt={value.alt}
            maxWidth={2000}
            fill
            priority
          />
        </Content>
      ),
      bodyText: ({ value }: ComponentProps<SanityBodyText>) => (
        <Content>
          <BlockContentContainer blocks={value.content} />
        </Content>
      ),
      people: ({ value }: ComponentProps<SanityPeople>) => (
        <Content>
          <PeopleContainer people={value.people} />
        </Content>
      ),
    },
  })
