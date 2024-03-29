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

declare type UserInfo = {
  givenName: string
  familyName: string
  email: string
  streetAddress: string
  postalCode: string
  region: string
  phoneNumber: string
}

declare type User = UserInfo & {
  id: string
  name: string
  createdAt: Date
}

declare type VippsSession = Session & {
  user: Session["user"] & Partial<AdditionalFields>
}

declare type ArtikkelFilter = "alle" | "aktuelt" | "i-nyhetene"
