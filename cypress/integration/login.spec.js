describe("Fabric Swop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  describe("Login", () => {
    it("show the correct browser title", () => {
      cy.title().should("include", "Fabric Swop");
    });
  });
});
