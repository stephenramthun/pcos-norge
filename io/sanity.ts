import sanityClient from "@sanity/client"

type PaginationOptions = {
  from: number
  count: number
}

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2022-07-20",
  useCdn: process.env.NODE_ENV === "production",
})

type FetchArticlesResult = {
  articles: Array<Article>
  remainingArticles: number
}

export const fetchArticles = ({
  from,
  count,
}: PaginationOptions): Promise<FetchArticlesResult> => {
  const start = from
  const end = from + count - 1
  return client.fetch(`
    {
      "articles": 
        *[_type == "article"][${start}..${end}] |
        order(published desc) {
          title,
          "slug": slug.current,
          image,
          published,
          ingress
        },
      "remainingArticles": count(*[_type == "article"][${end + 1}..-1])
    }
  `)
}
