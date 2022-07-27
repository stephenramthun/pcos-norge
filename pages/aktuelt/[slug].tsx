import groq from "groq"
import { PortableText } from "@portabletext/react"
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"
import { SanityDocument } from "sanity-codegen"

import { getClient } from "io/sanity/client"

import { Body } from "@components/Body"
import { Head } from "@components/Head"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { useLocaleDateString } from "@hooks/useLocaleDateString"
import { usePortableTextComponents } from "@hooks/usePortableTextComponents"
import { Article as ArticleObject } from "types/schema"
import { usePreviewSubscription } from "io/sanity/preview"

import styles from "./[slug].module.css"

const filterDataToSingleItem = <T extends SanityDocument>(
  data: T | Array<T>,
  preview: boolean,
): T => {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

interface ArticleProps {
  article: ArticleObject
}

const Article: NextPage<ArticleProps & PreviewProps> = ({
  article,
  query,
  queryParams,
  preview,
}) => {
  const { data: previewData } = usePreviewSubscription(query, {
    params: queryParams ?? {},
    initialData: article,
    enabled: preview,
  })

  const data = filterDataToSingleItem(previewData, preview)

  const components = usePortableTextComponents(data.body)
  const date = useLocaleDateString(new Date(data.published))

  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { href: "/", label: "Hjem" },
            { href: "/aktuelt", label: "Aktuelt" },
            {
              href: `/aktuelt/${data.slug}`,
              label: data.title,
            },
          ]}
        />
      </Content>
      <Content className={styles.Section}>
        <Heading className={styles.Heading} tag="h2" size="medium">
          {data.title}
        </Heading>
        <Body suppressHydrationWarning className={styles.Published}>
          {date}
        </Body>
        <div className={styles.ArticleContent}>
          {data.ingress && <Body suppressHydrationWarning>{data.ingress}</Body>}
          <PortableText value={data.body} components={components} />
        </div>
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}): Promise<GetStaticPropsResult<ArticleProps & PreviewProps>> => {
  const query = groq`
    *[_type == "article" && slug.current == $slug] {
      title,
      body,
      published,
      image
    }
  `
  const queryParams = { slug: params?.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  if (!data) return { notFound: true }

  const article = filterDataToSingleItem(data, preview)

  return {
    props: {
      article,
      preview,
      query,
      queryParams,
    },
  }
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = await getClient().fetch<Array<string>>(
      `*[_type == "article" && defined(slug.current)][].slug.current`,
    )
    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: false,
    }
  }

export default Article
