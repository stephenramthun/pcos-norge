import { PortableTextBlock } from "@portabletext/types"
import React from "react"

import { AccordionItem } from "./AccordionItem"

import styles from "./Accordion.module.css"

type Props = {
  items: {
    title: string
    content: PortableTextBlock[]
  }[]
}

export const Accordion: React.FC<Props> = ({ items }) => (
  <div className={styles.container}>
    {items.map((item, i) => (
      <AccordionItem key={i} title={item.title} content={item.content} />
    ))}
  </div>
)
