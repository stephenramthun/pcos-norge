import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import type { SanityImageObject } from "@sanity/image-url/lib/types/types"
import type { PortableTextBlock } from "@portabletext/types"
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"

import { client } from "../../config/sanity"

import { Body } from "@components/Body"
import { Head } from "@components/Head"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { FactBox } from "@components/FactBox"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"

import styles from "./[slug].module.css"

const articleComponents: Partial<PortableTextReactComponents> = {
  types: {
    factBox: ({ value }) => {
      return <FactBox facts={value.facts} />
    },
  },
  block: {
    normal: ({ children }) => <Body className={styles.Text}>{children}</Body>,
  },
}

interface ArticleProps {
  article: {
    title: string
    published: string
    body: Array<PortableTextBlock>
    slug: string
    image: SanityImageObject
  }
}

const Article: NextPage<ArticleProps> = (props) => {
  const imageProps = useNextSanityImage(client, props.article.image)

  console.log(imageProps)
  return (
    <PageContainer>
      <Head />
      <Header />
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
        <Heading className={styles.Heading} tag="h2" size="medium">
          {props.article.title}
        </Heading>
        <Body className={styles.Published} suppressHydrationWarning>
          {new Date(props.article.published).toLocaleDateString()}
        </Body>
        <div className={styles.ImageContainer}>
          <Image {...imageProps} alt="" layout="responsive" />
        </div>
        <div className={styles.ArticleContent}>
          <PortableText
            value={props.article.body}
            components={articleComponents}
          />
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
