type SanityImageObject =
  import("@sanity/image-url/lib/types/types").SanityImageObject

declare module "classnames"

declare type Childless<T> = Omit<T, "children">

declare type Maybe<T> = T | null

declare type Article = {
  slug: string
  title: string
  published: string
  image: SanityImageObject
}
