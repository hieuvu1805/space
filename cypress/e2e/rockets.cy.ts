describe("rockets spec", () => {
  it("see rockets data", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Falcon 1")
    cy.contains("Falcon 9 (activated)")
    cy.contains("United States")
    cy.contains("$50,000,000")
    cy.contains("70 m/229.6 ft")
    cy.contains("Falcon Heavy (activated)")
    cy.contains("Starship")
  })
})
