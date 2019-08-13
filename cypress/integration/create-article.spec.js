describe("Create-Article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/create-article");
  });

  it("has a complete form", () => {
    cy.get("form").should("have.length", 1);
    cy.get("form input").should("have.length", 6);
    cy.get("form select").should("have.length", 1);
    cy.get("form button").should("have.length", 1);
  });
});
