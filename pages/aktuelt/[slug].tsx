import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"

import { client } from "../../config/sanity"

import { Body } from "@components/Body"
import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"

import styles from "./[slug].module.css"

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

interface ArticleProps {
  article: {
    title: string
    published: string
    body: object[]
    slug: string
  }
}

const Article: NextPage<ArticleProps> = (props) => (
  <PageContainer>
    <Head />
    <Header />
    <Main>
      <Content className={styles.BreadCrumbs}>
        <Breadcrumbs
          links={[
            { href: "/", label: "Hjem" },
            { href: "/aktuelt", label: "Aktuelt" },
            {
              href: `/aktuelt/${props.article.slug}`,
              label: props.article.title,
            },
          ]}
        />
      </Content>
      <Content className={styles.Section}>
        <Heading tag="h2" size="medium">
          {props.article.title}
        </Heading>
        <Body suppressHydrationWarning>
          {new Date(props.article.published).toLocaleDateString()}
        </Body>
        <BlockContent blocks={props.article.body} serializers={serializers} />
      </Content>
    </Main>
    <Footer />
  </PageContainer>
)

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<ArticleProps>> => {
  const article = await client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0] {
      title,
      body,
      published
    }
  `,
    { slug: params?.slug },
  )

  return {
    props: {
      article: {
        ...article,
        slug: params?.slug,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = await client.fetch<Array<string>>(
      `*[_type == "article" && defined(slug.current)][].slug.current`,
    )
    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: false,
    }
  }

export default Article
