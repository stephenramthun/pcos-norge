import { PageContainer } from "@components/PageContainer"
import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Content } from "@components/Content"
import { Breadcrumbs } from "@components/Breadcrumbs"
import React from "react"

const MinSide = () => {
  return (
    <PageContainer>
      <Head />
      <Header />

      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Min side", href: "min-side" },
          ]}
        />
      </Content>
    </PageContainer>
  )
}

export default MinSide
