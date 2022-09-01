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
