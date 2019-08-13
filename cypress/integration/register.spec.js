describe("Register", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  it("navigates to login page on click", () => {
    cy.get('[data-cy="nav-start"]').click();
    cy.location("pathname").should("include", "");
  });

  it("has a complete form", () => {
    cy.get("form").should("have.length", 1);
    cy.get("form input").should("have.length", 7);
    cy.get("form button").should("have.length", 2);
  });
});
