import {
  ArticleObject,
  NyhetsartikkelObject,
  SanityBodyText,
  SanityHero,
  SanityPageLink,
} from "./sanity"

export const isHero = (element: SanityObject): element is SanityHero => {
  return element._type === "hero"
}

export const isPageLink = (
  element: SanityObject,
): element is SanityPageLink => {
  return element._type === "pageLink"
}

export const isBodyText = (
  element: SanityObject,
): element is SanityBodyText => {
  return element._type === "bodyText"
}

export const isUser = (user: any): user is User => {
  return (
    typeof user.id === "string" &&
    typeof user.name === "string" &&
    typeof user.email === "string" &&
    typeof user.streetAddress === "string" &&
    typeof user.postalCode === "string" &&
    typeof user.region === "string"
  )
}

export const isAgreement = (agreement: any): agreement is Agreement => {
  return (
    typeof agreement.status === "string" &&
    ["ACTIVE", "PENDING", "EXPIRED", "STOPPED"].includes(agreement.status)
  )
}

export const isNyhetsartikkel = (
  artikkel: ArticleObject | NyhetsartikkelObject,
): artikkel is NyhetsartikkelObject => !!(artikkel as NyhetsartikkelObject).href

export const isAktueltArtikkel = (
  artikkel: ArticleObject | NyhetsartikkelObject,
): artikkel is ArticleObject => !!(artikkel as ArticleObject).slug

export const isArtikkelFilter = (
  value?: string | string[],
): value is ArtikkelFilter =>
  value === "alle" || value === "aktuelt" || value === "i-nyhetene"
