import { NextPage } from "next"
import Head from "next/head"
import React from "react"

import { Heading } from "components/Heading"

const PageNotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PCOS Norge Admin - Side ikke funnet</title>
        <meta name="description" content="Administrasjonsside for PCOS-Norge" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <header />
      <main>
        <Heading tag="h1" size="small">
          Oooops
        </Heading>
      </main>
      <footer />
    </div>
  )
}

export default PageNotFound
