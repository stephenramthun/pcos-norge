import { BodyText, Hero, PageLink } from "types/schema"

export const isHero = (element: SanityObject): element is Hero => {
  return element._type === "hero"
}

export const isPageLink = (element: SanityObject): element is PageLink => {
  return element._type === "pageLink"
}

export const isBodyText = (element: SanityObject): element is BodyText => {
  return element._type === "bodyText"
}
