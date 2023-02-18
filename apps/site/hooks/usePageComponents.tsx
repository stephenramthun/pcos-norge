import React from "react"
import { PortableTextReactComponents } from "@portabletext/react"

import { Hero } from "components/Hero"
import { SanityImage } from "components/SanityImage"
import { Content } from "components/Content"
import { PeopleContainer } from "components/PeopleContainer"
import { PageLinkContainer } from "components/PageLinkContainer"
import { BlockContentContainer } from "components/BlockContentContainer"
import {
  SanityBodyText,
  SanityImageAsset,
  SanityPageLinks,
  SanityPeople,
} from "types/sanity"

type ComponentProps<T> = {
  value: T
}

export const usePageComponents = (): Partial<PortableTextReactComponents> => {
  return {
    types: {
      hero: ({ value }) => {
        return <Hero text={value.text} />
      },
      pageLinks: ({ value }: ComponentProps<SanityPageLinks>) => {
        return <PageLinkContainer links={value.links} />
      },
      imageAsset: ({ value }: ComponentProps<SanityImageAsset>) => {
        return (
          <Content>
            <SanityImage asset={value.asset} alt={value.alt} />
          </Content>
        )
      },
      bodyText: ({ value }: ComponentProps<SanityBodyText>) => {
        return <BlockContentContainer blocks={value.content} />
      },
      people: ({ value }: ComponentProps<SanityPeople>) => {
        return (
          <Content>
            <PeopleContainer people={value.people} />
          </Content>
        )
      },
    },
  }
}
