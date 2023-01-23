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
