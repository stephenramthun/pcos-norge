import { SanityClient } from "@sanity/client"
import groq from "groq"
import { createClient } from "next-sanity"

import { ArticleObject, NyhetsartikkelObject } from "types/sanity"

import { config } from "./config"

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview = false): SanityClient =>
  usePreview
    ? (previewClient as unknown as SanityClient)
    : (sanityClient as unknown as SanityClient)

type FetchArticlesOptions = {
  from: number
  count: number
  preview?: boolean
  filter: ArtikkelFilter
}

type FetchArticlesResult = {
  articles: (ArticleObject | NyhetsartikkelObject)[]
  remainingArticles: number
  query: string
}

export const fetchArticles = async ({
  from,
  count,
  preview = false,
  filter = "alle",
}: FetchArticlesOptions): Promise<FetchArticlesResult> => {
  const queryFilter = (() => {
    switch (filter) {
      case "alle":
        return `(_type == "article" && show == true) || _type == "newsArticle"`
      case "aktuelt":
        return `_type == "article" && show == true`
      case "i-nyhetene":
        return `_type == "newsArticle"`
    }
  })()

  const start = from
  const end = from + count - 1
  const query = groq`
    {
      "articles": 
        *[${queryFilter}] |
        order(published desc)[${start}..${end}] {
          href,
          published,
          title,
          "slug": slug.current,
          image {
            _type,
            alt,
            asset->
          },
          ingress,
          kilde,
          type
        },
      "remainingArticles": count(*[${queryFilter}][${end + 1}..-1])
    }
  `

  const props = await getClient(preview).fetch(query)

  return {
    ...props,
    query,
  }
}
