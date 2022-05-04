import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { PortableText } from "@portabletext/react"
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"

import { client } from "../../io/sanity"

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

import styles from "./[slug].module.css"

interface ArticleProps {
  article: Article
}

const Article: NextPage<ArticleProps> = (props) => {
  const imageProps = useNextSanityImage(client, props.article.image)

  const components = usePortableTextComponents(props.article.body)

  const date = useLocaleDateString(new Date(props.article.published))

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
              href: `/aktuelt/${props.article.slug}`,
              label: props.article.title,
            },
          ]}
        />
      </Content>
      <Content className={styles.Section}>
        <Heading className={styles.Heading} tag="h2" size="medium">
          {props.article.title}
        </Heading>
        <Body suppressHydrationWarning className={styles.Published}>
          {date}
        </Body>
        <div className={styles.ImageContainer}>
          <Image {...imageProps} alt="" layout="responsive" />
        </div>
        <div className={styles.ArticleContent}>
          {props.article.ingress && <Body>{props.article.ingress}</Body>}
          <PortableText value={props.article.body} components={components} />
        </div>
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<ArticleProps>> => {
  const article = await client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0] {
      title,
      body,
      published,
      image
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
