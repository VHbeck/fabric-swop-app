describe("Details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="input-username"]').type("Nessa");
    cy.get('[data-cy="input-password"]').type("1234");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");

    cy.get('[data-cy="nav-details"]').click({ multiple: true, force: true });
    cy.location("pathname").should("be", "details");
  });
  it("navigates to profile page on buy click", () => {
    cy.get('[data-cy="buy-button"]').click();
    cy.location("pathname").should("include", "profile");
  });
});
