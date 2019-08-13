describe("Profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/profile");
  });
  it("navigates to login page on click", () => {
    cy.get('[data-cy="nav-logout"]').click();
    cy.get("[data-cy=header-title]").should("contain", "Login");
    cy.location("pathname").should("include", "login");
  });
});
