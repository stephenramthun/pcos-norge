import React from "react"
import { signIn } from "next-auth/react"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import { ImageAsset } from "@sanity/types"

import { Head } from "components/Head"
import { Main } from "components/Main"
import { Body } from "components/Body"
import { Link } from "components/Link"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Content } from "components/Content"
import { Heading } from "components/Heading"
import { Checkbox } from "components/Checkbox"
import { Breadcrumbs } from "components/Breadcrumbs"
import { VippsButton } from "components/VippsButton"
import { SanityImage } from "components/SanityImage"
import { PageContainer } from "components/PageContainer"
import { SanityImageDocument } from "types/sanity"
import { getClient } from "io/sanity/client"

import styles from "./bliMedlem.module.css"
import { MembershipPrice } from "../model/membershipPrice"

interface BliMedlemProps {
  image: Omit<SanityImageDocument, "imageAsset"> & {
    asset: ImageAsset
    alt: string
  }
}

const BliMedlem: NextPage<BliMedlemProps> = (props) => {
  return (
    <PageContainer>
      <Head title="Bli medlem | PCOS Norge" />
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
                PCOS Norge er en ideell, landsdekkende forening for alle med
                diagnosen PCOS, for pårørende og for helsevesen. Sammen står vi
                sterkere og jo flere vi er i vårt fellesskap, desto mer kan vi
                få til.
              </Body>
              <Body>
                Ditt medlemsskap i PCOS Norge gjør det mulig for oss å kjempe
                for et bedre behandlingstilbud, politisk innflytelse, økt
                forståelse og kjennskap til diagnosen og å bryte tabu og skam
                mange som lever med diagnosen kjenner på. Her kan du lese mer om
                våre formål, hvem styret er og hva vi jobber med{" "}
                <Link href="/om-oss">her</Link>.
              </Body>
              <Body>
                Som medlem i PCOS Norge får du tilgang til våre medlemsfordeler.
                Medlemskontingenten betales kun en gang i året. Du får et
                automatisk fornyelseskrav i Vipps når året er omme.
              </Body>
              <ul className={styles.list}>
                <Body>Ditt medlemskap bidrar til:</Body>
                <li>
                  <Body>
                    å sikre bedre informasjonen til nydiagnostiserte i fremtiden
                  </Body>
                </li>
                <li>
                  <Body>økt kunnskap om PCOS</Body>
                </li>
                <li>
                  <Body>kompetanseheving i helseforetakene</Body>
                </li>
                <li>
                  <Body>
                    mer åpenhet og bekjempelse av skam og tabu knyttet til
                    diagnosen
                  </Body>
                </li>
                <li>
                  <Body>
                    å gjøre diagnosen synlig på et politisk nivå hvor vi kan
                    skape varig endring
                  </Body>
                </li>
                <li>
                  <Body>
                    et enhetlig og tverrfaglig behandlingstilbud som er likt for
                    alle uansett hvor i landet man bor og uavhengig av hvilken
                    lege man går til.
                  </Body>
                </li>
              </ul>
              <Body>
                Medlemskap koster {MembershipPrice.asKroner},- i året.
              </Body>
            </div>
            <div>
              <SanityImage
                asset={props.image.asset}
                alt={props.image.alt}
                layout="intrinsic"
                maxWidth={1000}
              />
            </div>
          </section>

          <section className={styles.register}>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                signIn("vipps", { callbackUrl: "/api/medlemskap/registrer" })
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
