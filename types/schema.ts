import type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen"

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
}

/**
 * Side
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page"

  /**
   * Tittel — `string`
   *
   *
   */
  title: string

  /**
   * Elementer — `array`
   *
   *
   */
  elements: Array<Hero | PageLinks | ImageAsset | FactBox | BodyText | People>

  /**
   * ID — `slug`
   *
   *
   */
  id: { _type: "id"; current: string }
}

/**
 * Artikkel
 *
 *
 */
export interface Article extends SanityDocument {
  _type: "article"

  /**
   * Tittel — `string`
   *
   * En kort tittel
   */
  title: string

  /**
   * Ingress — `string`
   *
   * En kort ingress
   */
  ingress: string

  /**
   * Innhold — `blockContent`
   *
   *
   */
  body?: BlockContent

  /**
   * ID — `slug`
   *
   * Autogenerert ID som brukes for lenking til artikkelen
   */
  slug?: { _type: "slug"; current: string }

  /**
   * Publisert — `datetime`
   *
   * Publiseringstidspunkt for artikkelen som vises på nettsiden. Merk at artikkelen publiseres umiddelbart uavhengig av tidspunktet som oppgis.
   */
  published?: string

  /**
   * Bilde — `imageAsset`
   *
   * Bilde som vises i lenker til artikkelen
   */
  image?: ImageAsset
}

export type Hero = {
  _type: "hero"
  /**
   * Text — `string`
   *
   *
   */
  text?: string

  /**
   * Lenkeknapp — `callToAction`
   *
   *
   */
  linkButton?: CallToAction
}

export type Fact = {
  _type: "fact"
  /**
   * Spørsmål — `string`
   *
   *
   */
  question?: string

  /**
   * Svar — `string`
   *
   *
   */
  answer?: string
}

export type Person = {
  _type: "person"
  /**
   * Navn — `string`
   *
   *
   */
  name: string

  /**
   * Bilde — `image`
   *
   *
   */
  picture?: {
    _type: "picture"
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Epost — `email`
   *
   *
   */
  email?: Email

  /**
   * Rolle — `string`
   *
   *
   */
  role: string
}

export type People = {
  _type: "people"
  /**
   * Personer — `array`
   *
   *
   */
  people?: Array<Person>
}

export type FactBox = {
  _type: "factBox"
  /**
   * Fakta — `array`
   *
   *
   */
  facts?: Array<Fact>
}

export type BodyText = {
  _type: "bodyText"
  /**
   * Innhold — `blockContent`
   *
   *
   */
  content: BlockContent
}

export type PageLink = {
  _type: "pageLink"
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Ingress — `string`
   *
   *
   */
  ingress?: string

  /**
   * Link — `callToAction`
   *
   *
   */
  callToAction?: CallToAction
}

export type PageLinks = {
  _type: "pageLinks"
  /**
   * Lenker — `array`
   *
   *
   */
  links: Array<PageLink>
}

export type ImageAsset = {
  _type: "imageAsset"
  asset: SanityAsset
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot

  /**
   * Alt — `string`
   *
   *
   */
  alt: string
}

export type CallToAction = {
  _type: "callToAction"
  /**
   * Link Text — `string`
   *
   *
   */
  linkText?: string

  /**
   * URL — `url`
   *
   *
   */
  url?: string
}

export type BlockContent = Array<ImageAsset | FactBox | SanityBlock>

export type Documents = Page | Article

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 *
 * Interface merging may help for the time being:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */
interface Email {}
