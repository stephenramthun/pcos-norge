describe('Page "Bidra"', () => {
  it("mounts and has no detectable a11y violations", () => {
    cy.visit("/bidra")

    cy.injectAxe()
    cy.checkA11y("#__next")
  })
})

export {}
