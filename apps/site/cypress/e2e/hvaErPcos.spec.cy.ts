describe('Page "Hva er PCOS?"', () => {
  it("mounts and has no detectable a11y violations", () => {
    cy.visit("/hva-er-pcos")

    cy.injectAxe()
    cy.checkA11y("#__next")
  })
})

export {}
