describe("Favorite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="input-username"]').type("Nessa");
    cy.get('[data-cy="input-password"]').type("1234");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");

    cy.get('[data-cy="nav-favorite"]').click();
    cy.location("pathname").should("be", "favorite");
  });
  it("navigates to feed page on click", () => {
    cy.get('[data-cy="nav-favorite-feed"]').click();
    cy.get("[data-cy=header-title]").should("contain", "Feed");
    cy.location("pathname").should("include", "feed");
  });
});
