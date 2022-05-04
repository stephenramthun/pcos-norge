type PortableTextBlock = import("@portabletext/types").PortableTextBlock
type SanityImageObject =
  import("@sanity/image-url/lib/types/types").SanityImageObject

declare module "classnames"

declare type Childless<T> = Omit<T, "children">

declare type Maybe<T> = T | null

declare type Article = {
  slug: string
  title: string
  published: string
  ingress?: string
  image: SanityImageObject
  body: Array<PortableTextBlock>
}
