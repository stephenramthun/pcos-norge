import React from "react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import { PortableTextBlock } from "@portabletext/types"
import { PortableText } from "@portabletext/react"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { PersonCard } from "@components/PersonCard"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"
import { usePortableTextComponents } from "@hooks/usePortableTextComponents"

import { client } from "../../config/sanity"

import styles from "./omOss.module.css"

type Person = {
  name: string
  email: string
  role: string
  picture: SanityImageObject
}

interface OmPcosProps {
  body: Array<PortableTextBlock>
  people: Array<Person>
}

const OmPcos: NextPage<OmPcosProps> = ({ body, people }) => {
  const portableTextComponents = usePortableTextComponents(body)
  return (
    <PageContainer>
      <Head />
      <Header />
      <Content>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Om oss", href: "/om-oss" },
          ]}
        />
      </Content>
      <Content className={styles.Section}>
        <Heading size="medium-large" tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <article>
          <PortableText value={body} components={portableTextComponents} />
        </article>
        <div className={styles.PersonCards}>
          {people.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              capacity={person.role}
              image={person.picture}
            />
          ))}
        </div>
      </Content>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<OmPcosProps>
> => {
  const props = await client.fetch(`
    *[_type == "omOss"][0] {
      body,
      people
    }
  `)

  return {
    props: props,
  }
}

export default OmPcos
