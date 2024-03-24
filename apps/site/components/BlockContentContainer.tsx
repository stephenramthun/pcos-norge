import { PortableText } from "@portabletext/react"
import React from "react"

import { usePortableTextComponents } from "hooks/usePortableTextComponents"

interface BlockContentContainerProps {
  blocks: PortableTextBlock[]
  expandableLists?: boolean
}

export const BlockContentContainer: React.FC<BlockContentContainerProps> = ({
  blocks,
  expandableLists = true,
}) => {
  const components = usePortableTextComponents(blocks, expandableLists)
  return <PortableText value={blocks} components={components} />
}
