import groq from "groq"
import { createClient } from "next-sanity"
import { SanityClient } from "@sanity/client"

import { ArticleObject } from "types/sanity"

import { config } from "./config"

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview = false): SanityClient =>
  usePreview ? previewClient : sanityClient

type FetchArticlesOptions = {
  from: number
  count: number
  preview?: boolean
}

type FetchArticlesResult = {
  articles: ArticleObject[]
  remainingArticles: number
  query: string
}

export const fetchArticles = async ({
  from,
  count,
  preview = false,
}: FetchArticlesOptions): Promise<FetchArticlesResult> => {
  const start = from
  const end = from + count - 1
  const query = groq`
    {
      "articles": 
        *[_type == "article"] |
        order(published desc)[${start}..${end}] {
          title,
          "slug": slug.current,
          image,
          published,
          ingress
        },
      "remainingArticles": count(*[_type == "article"][${end + 1}..-1])
    }
  `

  const props = await getClient(preview).fetch(query)

  return {
    ...props,
    query,
  }
}
