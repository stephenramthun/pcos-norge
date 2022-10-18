import type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
  SanityImagePalette,
  SanityImagePaletteSwatch,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
} from "sanity-codegen"

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
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
  elements: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<PageLinks>
    | SanityKeyed<ImageAsset>
    | SanityKeyed<FactBox>
    | SanityKeyed<BodyText>
    | SanityKeyed<People>
  >

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
  body: BlockContent

  /**
   * ID — `slug`
   *
   * ID som brukes for lenking til artikkelen
   */
  slug: { _type: "slug"; current: string }

  /**
   * Publisert — `datetime`
   *
   * Publiseringstidspunkt for artikkelen som vises på nettsiden. Merk at artikkelen publiseres umiddelbart uavhengig av tidspunktet som oppgis.
   */
  published: string

  /**
   * Bilde — `imageAsset`
   *
   * Bilde som vises i lenker til artikkelen
   */
  image: ImageAsset

  /**
   * Lenker — `navigationLinks`
   *
   * Referanser til artikler det skal lenkes til i bunnen av artikkelen, typisk hvis denne artikkelen er en del av en artikkelserie
   */
  pageLinks?: NavigationLinks

  /**
   * Metadata — `openGraphMetaData`
   *
   *
   */
  metadata?: OpenGraphMetaData
}

/**
 * Bilde
 *
 *
 */
export interface ImageDocument extends SanityDocument {
  _type: "imageDocument"

  /**
   * Tittel — `string`
   *
   *
   */
  title: string

  /**
   * Bildefil — `imageAsset`
   *
   *
   */
  imageAsset: ImageAsset

  /**
   * ID — `slug`
   *
   *
   */
  id: { _type: "id"; current: string }
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
    _type: "image"
    asset: SanityReference<SanityImageAsset>
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
  people: Array<SanityKeyed<Person>>
}

export type FactBox = {
  _type: "factBox"
  /**
   * Fakta — `array`
   *
   *
   */
  facts?: Array<SanityKeyed<Fact>>
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
  links: Array<SanityKeyed<PageLink>>
}

export type ImageAsset = {
  _type: "imageAsset"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot

  /**
   * Alt — `string`
   *
   *
   */
  alt?: string

  /**
   * Bildetekst — `string`
   *
   *
   */
  text?: string
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

export type BlockContent = Array<
  SanityKeyed<ImageAsset> | SanityKeyed<FactBox> | SanityKeyed<SanityBlock>
>

export type NavigationLinks = {
  _type: "navigationLinks"
  /**
   * Venstrelenke — `reference`
   *
   *
   */
  leftLink?: SanityReference<Article>

  /**
   * Høyrelenke — `reference`
   *
   *
   */
  rightLink?: SanityReference<Article>
}

export type OpenGraphMetaData = {
  _type: "openGraphMetaData"
  /**
   * Tittel — `string`
   *
   * En kort tittel
   */
  title: string

  /**
   * Beskrivelse — `string`
   *
   * En kort beskrivelse av innholdet i lenka
   */
  description: string

  /**
   * Bilde — `imageAsset`
   *
   * Bilde som vises i lenke-previewen av siden. Bør være 1200 x 630 piklser i størrelse.
   */
  image: ImageAsset
}

export type Documents = Page | Article | ImageDocument

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Email = any
