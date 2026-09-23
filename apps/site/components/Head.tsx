import NextHead from "next/head"
import React, { ReactNode } from "react"

interface HeadProps {
  children?: ReactNode
  title?: string
}

export const Head: React.FC<HeadProps> = ({
  children,
  title = "PMOS Norge | Den norske PMOS-foreningen",
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content="Den norske PMOS-foreningen" />
    <link rel="shortcut icon" href="/favicon.ico" />
    {children}
  </NextHead>
)
