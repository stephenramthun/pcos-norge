import React from "react"
import { NextPage } from "next"

import { Head } from "@components/Head"
import { Body } from "@components/Body"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { PersonCard } from "@components/PersonCard"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"

import styles from "./omOss.module.css"

const OmPcos: NextPage = () => {
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
      <div className={styles.HeroText}>
        <Heading size="medium-large" tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
      </div>
      <Content className={styles.Section}>
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
        <div className={styles.PersonCards}>
          <PersonCard capacity="Styreleder" name="Lorem Ipsum" link="/" />
          <PersonCard capacity="Styremedlem" name="Lorem Ipsum" />
          <PersonCard capacity="Styremedlem" name="Lorem Ipsum" />
          <PersonCard capacity="Styremedlem" name="Lorem Ipsum" />
          <PersonCard capacity="Styremedlem" name="Lorem Ipsum" />
        </div>
      </Content>
      <Footer />
    </PageContainer>
  )
}

export default OmPcos
