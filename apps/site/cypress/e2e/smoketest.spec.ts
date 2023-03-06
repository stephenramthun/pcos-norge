describe("Front page", () => {
  it("has no a11y errors", () => {
    cy.visit("/")

    cy.injectAxe()
    cy.checkA11y()
  })
})

export {}
