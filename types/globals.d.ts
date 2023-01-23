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
  email: string
  streetAddress: string
  postalCode: string
  region: string
  createdAt: Date
  phoneNumber: string
}

type Agreement = {
  id: string
  status: "ACTIVE" | "PENDING" | "EXPIRED" | "STOPPED"
  start: string | null
  pricing: { currency: "NOK"; amount: number }
  productName: string
  interval: { unit: "YEAR"; count: number }
}
