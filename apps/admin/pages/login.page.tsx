import { NextPage } from "next"
import Head from "next/head"
import React from "react"

import { Body } from "components/Body"
import { Heading } from "components/Heading"
import { Logo } from "components/Logo"

import styles from "./login.module.css"

const Login: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Logg inn | PCOS Norge</title>
        <meta name="description" content="Administrasjonsside for PCOS-Norge" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <header>
        <Logo />
      </header>
      <main>
        <Heading tag="h1" size="small">
          Logg inn
        </Heading>
        <Body>Du må logge inn for å se denne siden</Body>
        {/*<VippsButton callbackUrl="/" />*/}
      </main>
    </div>
  )
}

export default Login
