import React from "react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"

import { Head } from "@components/Head"
import { Body } from "@components/Body"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { ArticleCard } from "@components/ArticleCard"
import { PageContainer } from "@components/PageContainer"

import { client } from "../../config/sanity"

import styles from "./aktuelt.module.css"

interface AktueltProps {
  articles: {
    slug: string
    title: string
    published: string
    imageUrl: string
  }[]
}

const Aktuelt: NextPage<AktueltProps> = ({ articles }) => {
  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Aktuelt", href: "/aktuelt" },
          ]}
        />
      </Content>
      <Content>
        <Heading size="medium-large" tag="h1">
          Aktuelt
        </Heading>
      </Content>
      <Content>
        <article>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            sagittis metus. Vestibulum efficitur consequat ipsum, vitae
            efficitur sapien elementum ut. Nullam in nulla in felis ullamcorper
            cursus. Quisque iaculis ultricies massa et viverra. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras vel velit nisl. Duis bibendum aliquam sem quis
            posuere.
          </Body>
        </article>
      </Content>
      <Content className={styles.CardGrid}>
        {articles.map((it) => (
          <ArticleCard
            key={it.slug}
            slug={it.slug}
            title={it.title}
            imageUrl={it.imageUrl}
            published={new Date(it.published)}
          />
        ))}
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AktueltProps>
> => {
  const props = await client.fetch(`
    { 
      "articles": *[_type == "article"] | order(published desc) {
        title,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        published
      }
    }
  `)

  return {
    props: props,
  }
}

export default Aktuelt
