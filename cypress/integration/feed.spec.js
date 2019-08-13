describe("Feed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/feed");
  });
  it("footer navigates to feed page on click", () => {
    cy.get('[data-cy="nav-feed"]').click();
    cy.get("[data-cy=header-title").should("contain", "Feed");
    cy.location("pathname").should("include", "feed");
  });
  it("footer navigates to create articles page on click", () => {
    cy.get('[data-cy="nav-create-article"]').click();
    cy.get("[data-cy=header-title").should("contain", "Create");
    cy.location("pathname").should("include", "create-article");
  });
  it("footer navigates to search page on click", () => {
    cy.get('[data-cy="nav-search"]').click();
    cy.get("[data-cy=header-title").should("contain", "Search");
    cy.location("pathname").should("include", "search");
  });
  it("footer navigates to profile page on click", () => {
    cy.get('[data-cy="nav-profile"]').click();
    cy.location("pathname").should("include", "profile");
  });
  it("footer navigates to favorite page on click", () => {
    cy.get('[data-cy="nav-favorite"]').click();
    cy.get("[data-cy=header-title").should("contain", "Favorite");
    cy.location("pathname").should("include", "favorite");
  });
  it("navigates to details page on click", () => {
    cy.get('[data-cy="nav-details"]').click({ multiple: true, force: true });
    cy.location("pathname").should("include", "details");
  });
  it("navigates to profile page on click", () => {
    cy.get('[data-cy="nav-feed-profile"]').click({
      multiple: true,
      force: true
    });
    cy.location("pathname").should("include", "profile");
  });
});
