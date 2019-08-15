describe("Profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="input-username"]').type("Nessa");
    cy.get('[data-cy="input-password"]').type("1234");

    cy.get('[data-cy="submit-button"]').click();
    cy.location("pathname").should("be", "feed");

    cy.get('[data-cy="nav-profile"]').click();
    cy.location("pathname").should("be", "profile");
  });
  it("navigates to login page on click", () => {
    cy.get('[data-cy="nav-logout"]').click();
    cy.get("[data-cy=header-title]").should("contain", "Login");
    cy.location("pathname").should("include", "login");
  });
});
