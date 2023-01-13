import React, { ReactNode } from "react"
import NextHead from "next/head"

interface HeadProps {
  children?: ReactNode
}

export const Head: React.FC<HeadProps> = ({ children }) => (
  <NextHead>
    <title>PCOS Norge</title>
    <meta name="description" content="Den norske PCOS-foreningen" />
    <link rel="shortcut icon" href="/favicon.ico" />
    {children}
  </NextHead>
)
