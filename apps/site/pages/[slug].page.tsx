import { PortableText } from "@portabletext/react"
import { PortableTextBlock } from "@portabletext/types"
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next"

import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"
import { ReferenceLinkSummary } from "components/ReferenceLinkSummary"
import { getPortableTextComponents } from "hooks/getPortableTextComponents"
import { useReferenceLinks } from "hooks/useReferenceLinks"
import { getClient } from "io/sanity/client"
import { isBodyText } from "types/guards"

interface PageProps {
  title: string
  elements: Array<SanityObject>
  id: { current: string }
}

const Page: NextPage<PageProps> = ({ title, elements, id }) => {
  const components = getPortableTextComponents()

  const bodyTexts = elements
    .filter(isBodyText)
    .flatMap((it) => it.content) as unknown as Array<PortableTextBlock>

  const referenceLinks = useReferenceLinks(bodyTexts)

  return (
    <PageContainer>
      <Head />
      <Header />
      <Main>
        <Content>
          <Breadcrumbs
            links={[
              { href: "/", label: "Hjem" },
              { href: `/${id.current}`, label: title },
            ]}
          />
        </Content>
        <PortableText value={elements} components={components} />
        {Object.entries(referenceLinks).length > 0 && (
          <Content>
            <ReferenceLinkSummary links={referenceLinks} />
          </Content>
        )}
      </Main>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<PageProps>> => {
  const page = await getClient().fetch(
    `
    *[_type == "page" && id.current == $slug][0] {
      title,
      elements,
      id
    }
    `,
    { slug: params?.slug },
  )

  return {
    props: {
      title: page.title,
      elements: page.elements,
      id: page.id,
    },
  }
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = await getClient().fetch<Array<string>>(
      `*[_type == "page" && id != "forsiden"][].id.current`,
    )

    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: false,
    }
  }

export default Page
