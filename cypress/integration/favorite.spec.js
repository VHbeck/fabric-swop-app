describe("Favorite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/favorite");
  });
  it("navigates to feed page on click", () => {
    cy.get('[data-cy="nav-favorite-feed"]').click();
    cy.get("[data-cy=header-title]").should("contain", "Feed");
    cy.location("pathname").should("include", "feed");
  });
});
