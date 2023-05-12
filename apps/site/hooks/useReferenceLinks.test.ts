import { expect } from "@jest/globals"
import { PortableTextBlock } from "@portabletext/types"
import { renderHook } from "@testing-library/react"

import { useReferenceLinks } from "hooks/useReferenceLinks"

describe("useReferenceLinks", () => {
  it("returns an empty object when there are no reference links to be found", () => {
    const { result } = renderHook(() => useReferenceLinks([]))

    expect(result.current).toEqual({})
  })

  it("returns a map of all reference links found in given list of portable text blocks", () => {
    const elements: PortableTextBlock[] = [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Some text",
            marks: ["mark1"],
          },
          {
            _type: "span",
            text: "Some more text",
            marks: ["mark2"],
          },
          {
            _type: "span",
            text: "No reference link here",
            marks: [],
          },
        ],
        markDefs: [
          {
            _type: "referenceLink",
            _key: "mark1",
            href: "https://somedomain",
          },
          {
            _type: "referenceLink",
            _key: "mark2",
            href: "https://anotherdomain",
          },
          {
            _type: "notAReferenceLink",
            _key: "1234",
          },
        ],
      },
    ]
    const { result } = renderHook(() => useReferenceLinks(elements))

    expect(result.current).toEqual({
      mark1: {
        index: 1,
        children: "Some text",
        value: "https://somedomain",
      },
      mark2: {
        index: 2,
        children: "Some more text",
        value: "https://anotherdomain",
      },
    })
  })
})
