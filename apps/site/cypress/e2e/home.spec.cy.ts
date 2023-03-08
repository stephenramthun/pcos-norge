describe("Front page", () => {
  it("mounts and has no detectable a11y violations", () => {
    cy.visit("/")

    cy.injectAxe()
    cy.checkA11y("#__next", { retries: 3, interval: 50 })
  })
})

export {}
