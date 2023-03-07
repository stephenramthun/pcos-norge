describe('Page "Om oss"', () => {
  it("mounts and has no detectable a11y violations", () => {
    cy.visit("/om-oss")

    cy.injectAxe()
    cy.checkA11y("#__next")
  })
})

export {}
