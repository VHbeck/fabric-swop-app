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
  it("shows errors for invalid input", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="error-username"]').should("have.length", 1);
    cy.get('[data-cy="error-username"]').should(
      "contain",
      "Please put in a username with at least three characters"
    );
    cy.get('[data-cy="error-password"]').should("have.length", 1);
    cy.get('[data-cy="error-password"]').should(
      "contain",
      "The password must contain at least seven characters"
    );
  });
  it("register with username and password", () => {
    cy.get('[data-cy="register-username"]').type("Trude");
    cy.get('[data-cy="register-password"]').type("1234567");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");
  });
});
