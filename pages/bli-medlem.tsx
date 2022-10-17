import React, { FormEvent } from "react"
import { NextPage } from "next"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import { PageContainer } from "@components/PageContainer"
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

import styles from "./bliMedlem.module.css"

const getValue = (form: HTMLFormElement, name: string): string => {
  const value = (form.elements.namedItem(name) as HTMLInputElement | null)
    ?.value

  if (!value) {
    throw Error(`Couldn't find element with name "${name}"`)
  }

  return value
}

const submitMemberRegistration = (
  recaptchaToken: string,
  form: HTMLFormElement,
): Promise<Response> => {
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
      recaptchaToken,
    }),
  })
}

const BliMedlem: NextPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    executeRecaptcha?.("registrerMedlemskap").then((recaptchaToken) => {
      submitMemberRegistration(recaptchaToken, event.target as HTMLFormElement)
    })
  }

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
          <Body>
            Her skal det komme en tekst som beskriver fordelene med å være
            medlem i PCOS Norge. Det skal også komme frem hvor mye
            årskontingenten er, sikkert 200kr eller noe sånt.
          </Body>
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <Button>Meld meg inn</Button>
          </form>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default BliMedlem
