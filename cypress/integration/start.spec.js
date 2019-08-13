describe("Fabric Swop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("show the correct browser title", () => {
    cy.title().should("include", "Fabric Swop");
  });
  it("navigates to register page on click", () => {
    cy.get('[data-cy="register-button"]').click();
    cy.get("[data-cy=header-title").should("contain", "Register");
    cy.location("pathname").should("include", "register");
  });

  it("navigates to login page on click", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get("[data-cy=header-title").should("contain", "Login");
    cy.location("pathname").should("include", "login");
  });
});
