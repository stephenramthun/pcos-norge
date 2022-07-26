import groq from "groq"
import { createClient } from "next-sanity"
import { SanityClient } from "@sanity/client"

import { Article } from "types/schema"
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
  articles: Array<Article>
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
        *[_type == "article"][${start}..${end}] |
        order(published desc) {
          title,
          slug,
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
