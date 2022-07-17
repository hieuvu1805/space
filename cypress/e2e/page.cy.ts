describe("page spec", () => {
  it("visit page", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("©")

    cy.contains("Rockets")
    cy.contains("404").click()
    cy.url().should("include", "/404page")
  })
})

export {}
