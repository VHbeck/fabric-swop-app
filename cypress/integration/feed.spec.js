describe("Fabric Swop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/feed");
  });
  it("navigates to feed page on click", () => {
    cy.get('[data-cy="nav-feed"]').click();
    cy.get("[data-cy=header-title").should("contain", "Feed");
    cy.location("pathname").should("include", "feed");
  });
  it("navigates to create articles page on click", () => {
    cy.get('[data-cy="nav-create-article"]').click();
    cy.get("[data-cy=header-title").should("contain", "Create");
    cy.location("pathname").should("include", "create-article");
  });
  it("navigates to search page on click", () => {
    cy.get('[data-cy="nav-search"]').click();
    cy.get("[data-cy=header-title").should("contain", "Search");
    cy.location("pathname").should("include", "search");
  });
  it("navigates to profile page on click", () => {
    cy.get('[data-cy="nav-profile"]').click();
    cy.location("pathname").should("include", "profile");
  });
  it("navigates to favorite page on click", () => {
    cy.get('[data-cy="nav-favorite"]').click();
    cy.get("[data-cy=header-title").should("contain", "Favorite");
    cy.location("pathname").should("include", "favorite");
  });
});
