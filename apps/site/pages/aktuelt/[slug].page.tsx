import { PortableText } from "@portabletext/react"
import groq from "groq"
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"
import { useRouter } from "next/router"

import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { PageContainer } from "components/PageContainer"
import { PageLinks } from "components/PageLinks"
import { ReferenceLinkSummary } from "components/ReferenceLinkSummary"
import { useLocaleDateString } from "hooks/useLocaleDateString"
import { usePortableTextComponents } from "hooks/usePortableTextComponents"
import { useReferenceLinks } from "hooks/useReferenceLinks"
import { getClient } from "io/sanity/client"
import { usePreviewSubscription } from "io/sanity/preview"
import { ArticleObject, SanityDocument } from "types/sanity"

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
    return data.find((item) => item._id?.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

const useCanonicalUrl = (): string => {
  const router = useRouter()
  return "https://www.pcosnorge.no" + router.asPath
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

  const components = usePortableTextComponents(data.body, true)
  const date = useLocaleDateString(new Date(data.published))

  const referenceLinks = useReferenceLinks(data.body)

  return (
    <PageContainer>
      <Head>
        {data.metadata && (
          <>
            <meta
              property="og:title"
              content={data.metadata.title}
              key="title"
            />
            <meta
              property="og:description"
              content={data.metadata.description}
              key="description"
            />
            <meta
              property="og:image"
              content={(data.metadata.image as unknown as MetadataImage)?.url}
              key="image"
            />
            <meta
              property="og:image:width"
              content={`${
                (data.metadata.image as unknown as MetadataImage).metadata
                  .dimensions.width
              }`}
            />
            <meta
              property="og:image:height"
              content={`${
                (data.metadata.image as unknown as MetadataImage).metadata
                  .dimensions.height
              }`}
            />
          </>
        )}
        <meta property="og:type" content="article" key="type" />
        <meta property="og:url" content={useCanonicalUrl()} key="url" />
      </Head>
      <Header className={styles.header} />
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
      <Content className={styles.section}>
        <Heading className={styles.heading} tag="h1" size="medium">
          {data.title}
        </Heading>
        <Body suppressHydrationWarning className={styles.published}>
          {date}
        </Body>
        <div className={styles.content}>
          {data.ingress && <Body suppressHydrationWarning>{data.ingress}</Body>}
          <PortableText value={data.body} components={components} />
          {Object.entries(referenceLinks).length > 0 && (
            <ReferenceLinkSummary links={referenceLinks} />
          )}
        </div>
        {(data.pageLinks?.leftLink || data.pageLinks?.rightLink) && (
          <PageLinks
            left={data.pageLinks.leftLink as unknown as ArticleLink}
            right={data.pageLinks.rightLink as unknown as ArticleLink}
          />
        )}
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
      "image": image.asset->,
      pageLinks {
        leftLink->{
          "slug": slug.current,
          title
        },
        rightLink->{
          "slug": slug.current,
          title
        }
      },
      metadata {
        title,
        description,
        "image": image.asset->,
      },
    }
  `
  const queryParams = { slug: params?.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  if (!data) return { notFound: true }

  const article = filterDataToSingleItem(data, preview)

  return {
    props: {
      article: {
        ...article,
        slug: params?.slug,
      },
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
