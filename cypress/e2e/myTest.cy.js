describe("testing", () => {
  it("check the title of the google", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google");
  });
  it("check the title of the google not", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Googlsfsfe");
  });
});
