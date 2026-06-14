import { PortableText } from "@portabletext/react"
import React from "react"

import { usePortableTextComponents } from "hooks/usePortableTextComponents"

interface BlockContentContainerProps {
  blocks: PortableTextBlock[]
}

export const BlockContentContainer: React.FC<BlockContentContainerProps> = ({
  blocks,
}) => {
  const components = usePortableTextComponents(blocks)
  return <PortableText value={blocks} components={components} />
}
