import sanityClient from "@sanity/client"

type PaginationOptions = {
  from: number
  count: number
}

export const client = sanityClient({
  projectId: "7bmjnb8i",
  dataset: "production",
  apiVersion: "2021-10-12",
  useCdn: true,
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
          published
        },
      "remainingArticles": count(*[_type == "article"][${end + 1}..-1])
    }
  `)
}
