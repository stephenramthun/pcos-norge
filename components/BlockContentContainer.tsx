import React from "react"
import { PortableText } from "@portabletext/react"

import { Content } from "components/Content"
import { usePortableTextComponents } from "hooks/usePortableTextComponents"

import styles from "./BlockContentContainer.module.css"

interface BlockContentContainerProps {
  blocks: PortableTextBlock[]
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
