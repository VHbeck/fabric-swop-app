describe("Fabric Swop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("login with valid username and password", () => {
    cy.get('[data-cy="input-username"]').type("Nessa");
    cy.get('[data-cy="input-password"]').type("1234");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");
  });
  it("navigates to register page on click", () => {
    cy.get('[data-cy="nav-register"]').click();
    cy.location("pathname").should("include", "register");
  });
  it("has a complete form", () => {
    cy.get("form").should("have.length", 1);
    cy.get("form input").should("have.length", 2);
    cy.get("form button").should("have.length", 2);
  });
  it("shows errors for invalid input", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="error-username"]').should("have.length", 1);
    cy.get('[data-cy="error-username"]').should(
      "contain",
      "Please put in a valid username"
    );
    cy.get('[data-cy="error-password"]').should("have.length", 1);
    cy.get('[data-cy="error-password"]').should(
      "contain",
      "Please put in a valid password"
    );
  });
});
