import { PortableTextReactComponents } from "@portabletext/react"
import React from "react"

import { BlockContentContainer } from "components/BlockContentContainer"
import { Content } from "components/Content"
import { Hero } from "components/Hero"
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
  (): Partial<PortableTextReactComponents> => {
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
              <SanityImage
                asset={value.asset}
                alt={value.alt}
                maxWidth={2000}
                fill
                priority
              />
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
