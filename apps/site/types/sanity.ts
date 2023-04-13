import { SanityReference } from "@sanity/image-url/lib/types/types"
import { ImageAsset } from "@sanity/types"

export type SanityDocument = {
  _id: string
}

export type SanitySlug = SanityObject & {
  current: string
}

export type SanityImageDocument = SanityDocument & {
  title: string
  imageAsset: ImageAsset
  slug: SanitySlug
}

export type SanityPageDocument = SanityDocument & {
  title: string
  elements: PortableTextBlock[]
  id: SanitySlug
}

export type SanityObject = {
  _type: string
}

export type SanityImageAsset = SanityObject & {
  _type: "imageAsset"
  alt?: string
  text?: string
  asset: ImageAsset
}

export type SanityBodyText = SanityObject & {
  _type: "bodyText"
  content: PortableTextBlock[]
}

export type SanityCallToAction = SanityObject & {
  _type: "callToAction"
  linkText?: string
  url?: string
}

export type SanityFact = SanityObject & {
  _type: "fact"
  question?: string
  answer?: string
}

export type SanityFactBox = SanityObject & {
  _type: "factBox"
  facts: SanityFact[]
}

export type SanityPageLink = SanityObject & {
  _type: "pageLink"
  title: string
  ingress: string
  callToAction: SanityCallToAction
}

export type SanityPageLinks = SanityObject & {
  links: SanityPageLink[]
}

export type SanityPerson = SanityObject & {
  _type: "person"
  name: string
  picture?: SanityImageAsset
  email?: string
  role: string
}

export type SanityPeople = SanityObject & {
  people: SanityPerson[]
}

export type SanityHero = SanityObject & {
  _type: "hero"
  text?: string
  linkButton?: SanityCallToAction
}

export type SanityNavigationLinks = SanityObject & {
  _type: "navigationLinks"
  leftLink?: SanityReference
  rightLink?: SanityReference
}

export type OgMetadata = {
  _type: "openGraphMetaData"
  title: string
  description: string
  image: SanityImageAsset
}

export type ArticleObject = SanityDocument & {
  title: string
  ingress: string
  body: PortableTextBlock[]
  slug: string
  published: string
  image: SanityImageAsset
  pageLinks?: SanityNavigationLinks
  metadata?: OgMetadata
  show: boolean
}
