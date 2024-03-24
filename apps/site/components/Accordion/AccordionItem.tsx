import { CaretDown } from "@phosphor-icons/react"
import { PortableTextBlock } from "@portabletext/types"
import classNames from "classnames"
import React, { useLayoutEffect, useRef, useState } from "react"

import { BlockContentContainer } from "components/BlockContentContainer"
import { Body } from "components/Body"

import styles from "./AccordionItem.module.css"

type Props = {
  title: string
  content: PortableTextBlock[]
}

export const AccordionItem: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = contentRef.current
    if (element) {
      element.style.setProperty("--content-height", `${element.scrollHeight}px`)
    }
  }, [contentRef])

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Body>{title}</Body>
        <CaretDown size={24} />
      </button>
      <div
        ref={contentRef}
        className={classNames(styles.content, isOpen && styles.open)}
      >
        <BlockContentContainer expandableLists={false} blocks={content} />
      </div>
    </>
  )
}
