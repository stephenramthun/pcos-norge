import NextHead from "next/head"
import React, { ReactNode } from "react"

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
