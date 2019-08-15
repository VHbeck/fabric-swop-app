describe("Create-Article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="input-username"]').type("Nessa");
    cy.get('[data-cy="input-password"]').type("1234");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");

    cy.get('[data-cy="nav-create-article"]').click();
    cy.location("pathname").should("be", "create-article");
  });

  it("has a complete form", () => {
    cy.get("form").should("have.length", 1);
    cy.get("form input").should("have.length", 6);
    cy.get("form select").should("have.length", 1);
    cy.get("form button").should("have.length", 1);
  });
  it("shows errors for invalid input", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="error-name"]').should("have.length", 1);
    cy.get('[data-cy="error-name"]').should(
      "contain",
      "Please put in a name with at least three characters"
    );
    cy.get('[data-cy="error-fabricLength"]').should("have.length", 1);
    cy.get('[data-cy="error-fabricLength"]').should(
      "contain",
      "Please put in a fabric length"
    );
    cy.get('[data-cy="error-fabricWidth"]').should("have.length", 1);
    cy.get('[data-cy="error-fabricWidth"]').should(
      "contain",
      "Please put in a fabric width"
    );
    cy.get('[data-cy="error-price"]').should("have.length", 1);
    cy.get('[data-cy="error-price"]').should(
      "contain",
      "Please put in a price"
    );
    cy.get('[data-cy="error-fabricColor"]').should("have.length", 1);
    cy.get('[data-cy="error-fabricColor"]').should(
      "contain",
      "Please put in at least one color"
    );
    cy.get('[data-cy="error-type"]').should("have.length", 1);
    cy.get('[data-cy="error-type"]').should(
      "contain",
      "Please choose a fabric type"
    );
  });
});
