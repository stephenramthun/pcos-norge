type Session = import("next-auth").Session

type PortableTextBlock = import("@portabletext/types").PortableTextBlock
type SanityImageObject =
  import("@sanity/image-url/lib/types/types").SanityImageObject

declare type ArticleLink = {
  title: string
  slug: string
}

declare module "classnames"

declare type Childless<T> = Omit<T, "children">

declare type Maybe<T> = T | null

declare type SanityObject = {
  _type: string
}

declare type PreviewProps = {
  query: string
  preview: boolean
  queryParams?: { slug?: string | Array<string> }
}

declare type MetadataImage = {
  url: string
  metadata: {
    dimensions: {
      width: number
      height: number
    }
  }
}

type User = {
  id: string
  name: string
  givenName: string
  email: string
  streetAddress: string
  postalCode: string
  region: string
  createdAt: Date
  phoneNumber: string
}

type VippsSession = Session & {
  user: Session["user"] & Partial<AdditionalFields>
}
