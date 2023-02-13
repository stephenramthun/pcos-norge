import React, { ReactNode } from "react"
import NextHead from "next/head"

interface HeadProps {
  children?: ReactNode
  title?: string
}

export const Head: React.FC<HeadProps> = ({
  children,
  title = "PCOS Norge | Den norske PCOS-foreningen",
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content="Den norske PCOS-foreningen" />
    <link rel="shortcut icon" href="/favicon.ico" />
    {children}
  </NextHead>
)
