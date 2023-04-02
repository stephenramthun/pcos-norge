import { renderHook } from "@testing-library/react"
import { useLocaleDateString } from "hooks/useLocaleDateString"
import { expect } from "@jest/globals"

describe("useLocaleDateString", () => {
  it("takes a date object and returns a formatted locale date string", () => {
    const date = new Date("2020-01-01")
    const { result } = renderHook(() => useLocaleDateString(date))

    expect(result.current).toEqual("1.1.2020")
  })
})
