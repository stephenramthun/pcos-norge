import React, { FormEvent } from "react"
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
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Checkbox } from "@components/Checkbox"
import { Link } from "@components/Link"

import styles from "./bliMedlem.module.css"

const getValue = (form: HTMLFormElement, name: string): string => {
  const value = (form.elements.namedItem(name) as HTMLInputElement | null)
    ?.value

  if (!value) {
    throw Error(`Couldn't find element with name "${name}"`)
  }

  return value
}

const submitMemberRegistration = (form: HTMLFormElement): Promise<Response> => {
  return fetch("/api/medlemsregistrering", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      givenName: getValue(form, "givenName"),
      familyName: getValue(form, "familyName"),
      email: getValue(form, "email"),
      address: getValue(form, "address"),
      postalCode: getValue(form, "postalCode"),
      city: getValue(form, "city"),
    }),
  })
}

interface BliMedlemProps {
  image: Omit<ImageDocument, "imageAsset"> & {
    asset: SanityImageAsset
    alt: string
  }
}

const BliMedlem: NextPage<BliMedlemProps> = (props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    submitMemberRegistration(event.target as HTMLFormElement)
  }

  return (
    <PageContainer>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
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
                Her skal det komme en tekst som beskriver fordelene med å være
                medlem i PCOS Norge. Det skal også komme frem hvor mye
                årskontingenten er, sikkert 200kr eller noe sånt.
              </Body>
              <Body>
                Her skal det komme en tekst som beskriver fordelene med å være
                medlem i PCOS Norge. Det skal også komme frem hvor mye
                årskontingenten er, sikkert 200kr eller noe sånt.
              </Body>
            </div>
            <div>
              <SanityImage
                asset={props.image.asset}
                alt={props.image.alt}
                layout="intrinsic"
              />
            </div>
          </section>

          <section className={styles.formContainer}>
            <label htmlFor="member-registration">
              <Heading tag="h2" size="small">
                Dine opplysninger
              </Heading>
            </label>
            <form
              id="member-registration"
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <Input
                label="Fornavn"
                type="text"
                autoComplete="on"
                name="givenName"
                required
              />
              <Input
                label="Etternavn"
                type="text"
                autoComplete="on"
                name="familyName"
                required
              />
              <Input
                label="E-postadresse"
                type="email"
                autoComplete="on"
                name="email"
                required
              />
              <Input
                label="Adresse"
                type="text"
                autoComplete="on"
                name="address"
                required
              />
              <section className={styles.addressDetails}>
                <Input
                  label="Postnummer"
                  type="numeric"
                  autoComplete="on"
                  name="postalCode"
                  required
                  maxLength={4}
                  minLength={4}
                />
                <Input
                  label="Poststed"
                  type="text"
                  autoComplete="on"
                  name="city"
                  required
                />
              </section>

              <section className={styles.termsAndConditions}>
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
              </section>
              <Button>Meld meg inn</Button>
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
