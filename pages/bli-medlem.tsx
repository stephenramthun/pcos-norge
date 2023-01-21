import React from "react"
import { signIn } from "next-auth/react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { SanityImageAsset } from "sanity-codegen"

import { ImageDocument } from "types/schema"
import { getClient } from "io/sanity/client"

import { PageContainer } from "@components/PageContainer"
import { SanityImage } from "@components/SanityImage"
import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Main } from "@components/Main"
import { Footer } from "@components/Footer"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Body } from "@components/Body"
import { VippsButton } from "@components/VippsButton"
import { Checkbox } from "@components/Checkbox"
import { Link } from "@components/Link"

import styles from "./bliMedlem.module.css"

interface BliMedlemProps {
  image: Omit<ImageDocument, "imageAsset"> & {
    asset: SanityImageAsset
    alt: string
  }
}

const BliMedlem: NextPage<BliMedlemProps> = (props) => {
  return (
    <PageContainer>
      <Head />
      <Header />

      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Bli medlem", href: "bli-medlem" },
          ]}
        />
      </Content>

      <Main>
        <Content className={styles.content}>
          <Heading tag="h1" size="medium-large">
            Bli medlem
          </Heading>

          <section className={styles.pitch}>
            <div className={styles.textContainer}>
              <Body>
                Det er på tide at PCOS blir tatt på alvor i helsevesenet. Som
                medlem i PCOS Norge støtter du oss i vårt arbeid for mer
                synlighet, normalisering og økt oppmerksomhet rundt diagnosen og
                bedre kunnskap om PCOS i helsevesenet. Du er velkommen til å
                melde seg inn som medlem hos oss uavhengig om du har sykdommen,
                kjenner noen som har den eller bare ønsker å støtte en viktig og
                god sak.
              </Body>
              <Body>
                Vi er en nyoppstartet organisasjon og jobber for tiden med å
                kunne tilby våre medlemmer eksklusive medlemsfordeler. Meld deg
                på nyhetsbrevet vårt så får du vite når vi lanserer nye
                fordeler.
              </Body>
              <ul className={styles.list}>
                <Body>Derfor bør du bli medlem</Body>
                <li>
                  <Body>
                    Ditt medlemskap bidrar til økt kunnskap om PCOS i Norge
                  </Body>
                </li>
                <li>
                  <Body>
                    Din støtte sikrer en bedre helsefremtid for alle med PCOS
                  </Body>
                </li>
                <li>
                  <Body>
                    Du hjelper oss nå politikere og andre viktige aktører på
                    helsefeltet
                  </Body>
                </li>
                <li>
                  <Body>
                    Du bidrar til kompetanseheving av helsepersonell over hele
                    landet
                  </Body>
                </li>
              </ul>
              <Body>Medlemskap koster 200,- i året.</Body>
            </div>
            <div>
              <SanityImage
                asset={props.image.asset}
                alt={props.image.alt}
                layout="intrinsic"
              />
            </div>
          </section>

          <section className={styles.register}>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                signIn("vipps", { callbackUrl: "/api/registrer-medlemskap" })
              }}
            >
              <Checkbox
                label={
                  <span>
                    Jeg bekrefter å ha lest og forstått PCOS Norges{" "}
                    <Link href="/personvernerklæring" target="_blank">
                      personvernerklæring
                    </Link>{" "}
                    og godkjenner innholdet i den.
                  </span>
                }
                required
              />
              <VippsButton
                variant="register"
                onClick={() => null}
                type="submit"
              />
            </form>
          </section>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default BliMedlem

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<BliMedlemProps>
> => {
  const props = await getClient().fetch(`
    {
      "image": *[_type == "imageDocument" && id.current == "bli-medlem"][0] {
        title,
        "asset": imageAsset.asset->,
        "alt": imageAsset.alt,
        id
      }
    }
  `)

  return {
    props: props,
  }
}
