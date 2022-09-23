import React from "react"
import { PortableText } from "@portabletext/react"

import { usePortableTextComponents } from "@hooks/usePortableTextComponents"
import { BlockContent } from "types/schema"
import { Content } from "@components/Content"

import styles from "./BlockContentContainer.module.css"

interface BlockContentContainerProps {
  blocks: BlockContent
}

export const BlockContentContainer: React.FC<BlockContentContainerProps> = ({
  blocks,
}) => {
  const components = usePortableTextComponents(blocks)
  return (
    <Content className={styles.container}>
      <PortableText value={blocks} components={components} />
    </Content>
  )
}
