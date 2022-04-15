import React from "react"
import NextHead from "next/head"

export const Head: React.VFC = () => (
  <NextHead>
    <title>PCOS Norge</title>
    <meta name="description" content="Den norske PCOS-foreningen" />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
)
