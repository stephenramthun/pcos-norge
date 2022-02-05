import React from "react"
import { NextPage } from "next"

import { Head } from "@components/Head"
import { Body } from "@components/Body"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"

import styles from "./index.module.css"

const OmPcos: NextPage = () => {
  return (
    <PageContainer>
      <Head />
      <Header variant="light" />
      <Content className={styles.Breadcrumbs}>
        <Breadcrumbs
          links={[
            { label: "Forside", href: "/" },
            { label: "Om PCOS", href: "/om-pcos" },
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
          <Body>
            Pellentesque vel tortor condimentum, feugiat nulla vel, faucibus
            neque. Cras quis lectus elit. Donec vitae tincidunt risus.
            Pellentesque felis sapien, semper sit amet eros faucibus, aliquet
            ultricies est. Donec mi erat, convallis at accumsan nec, lobortis
            non dolor. Morbi non feugiat est, sit amet pulvinar ipsum. Proin leo
            odio, tincidunt at lectus eget, tincidunt posuere purus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Proin bibendum ut mi ac pharetra. Etiam facilisis sem
            vitae malesuada sagittis. Vestibulum suscipit sit amet augue sed
            iaculis. Ut sit amet dui quis dui semper tempus efficitur ultrices
            leo. Suspendisse potenti. Maecenas quis venenatis quam.
          </Body>
          <Body>
            Praesent placerat egestas pretium. Donec sodales luctus est, eu
            molestie tortor molestie vel. Nam faucibus felis vel urna iaculis
            ultrices a in erat. In ut massa at ex mattis tempus. Vivamus
            hendrerit ex mauris, quis varius sem pulvinar in. Mauris consequat,
            ligula ac finibus dictum, diam orci bibendum justo, vitae eleifend
            justo turpis a elit. Nunc blandit vestibulum gravida. Sed id mi et
            dui interdum facilisis. In congue luctus risus in eleifend. Nullam
            ultrices nulla sed consequat sagittis. Vestibulum molestie pretium
            nisi, ut tincidunt ligula semper non. Quisque tempus euismod dui,
            non sollicitudin tortor aliquet eu.
          </Body>
          <Body>
            Mauris et metus eget arcu elementum ullamcorper. Donec rutrum
            lacinia ex et pretium. Nunc ullamcorper velit vitae fringilla
            facilisis. Nunc nisi ipsum, commodo mollis leo nec, fermentum
            pulvinar augue. Etiam nec mauris non neque posuere semper quis vel
            sem. Sed ac nibh dignissim, euismod arcu non, tincidunt lacus. Nulla
            felis mauris, condimentum eget tristique eget, sagittis nec neque.
          </Body>
          <Body>
            Cras ut sem orci. Vivamus ultricies nisl massa, sed mollis libero
            vehicula sit amet. Maecenas nec fringilla nibh. Pellentesque id ante
            ut lectus tristique dictum id a nisi. Suspendisse dignissim nunc nec
            dolor sagittis, at luctus mi iaculis. Curabitur tempor ligula in
            ante mattis blandit. Integer a tristique sem. Nam gravida ipsum
            ante, eget rhoncus neque ultricies ut. Cras aliquam nunc elit, vel
            mattis quam aliquet a. Etiam a mattis lectus. Phasellus bibendum,
            sem sit amet faucibus venenatis, neque massa ullamcorper velit, sit
            amet auctor ipsum nisi ut arcu. Phasellus ultrices neque at erat
            blandit auctor. Etiam maximus porttitor neque id pharetra.
          </Body>
        </article>
      </Content>
      <Footer />
    </PageContainer>
  )
}

export default OmPcos
