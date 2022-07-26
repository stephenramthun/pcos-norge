import { ReactNode, useMemo } from "react"
import {
  PortableTextBlock,
  PortableTextMarkDefinition,
} from "@portabletext/types"
import { BlockContent } from "types/schema"

type ReferenceLinkMarkDef = {
  href: string
  blank: boolean
  _key: string
  _type: "referenceLink"
}

type ReferenceLink = {
  children: ReactNode
  value: string
  index: number
}

export type UseReferenceLinksResult = {
  [key: string]: ReferenceLink
}

const isReferenceLink = (
  markDef?: PortableTextMarkDefinition,
): markDef is ReferenceLinkMarkDef => markDef?._type === "referenceLink"

export const useReferenceLinks = (
  elements: BlockContent | Array<PortableTextBlock>,
): UseReferenceLinksResult => {
  return useMemo(() => {
    const data: UseReferenceLinksResult = {}

    const blocksWithReferenceLinks = (
      elements as Array<PortableTextBlock>
    ).filter((it) => it.markDefs?.filter(isReferenceLink).length ?? 0 > 0)

    let linkCount = 0

    for (const { children, markDefs } of blocksWithReferenceLinks) {
      for (const child of children) {
        for (const mark of child.marks) {
          const markDef = markDefs?.find((it) => it._key === mark)
          if (isReferenceLink(markDef)) {
            linkCount += 1
            data[markDef._key] = {
              index: linkCount,
              children: child.text,
              value: markDef.href,
            }
          }
        }
      }
    }

    return data
  }, [elements])
}
