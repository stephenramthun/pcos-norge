import { describe, expect, it } from "@jest/globals"

import { MembershipPrice } from "./membershipPrice"

describe("MembershipPrice", () => {
  it("gets price as øre", () => {
    expect(MembershipPrice.asØre).toEqual(30000)
  })

  it("gets price as kroner", () => {
    expect(MembershipPrice.asKroner).toEqual(300)
  })
})
