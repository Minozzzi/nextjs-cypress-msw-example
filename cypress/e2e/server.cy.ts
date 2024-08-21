describe("server page", () => {
  const url = "http://localhost:3000/server";

  it("passes1", () => {
    const mockResponse = "new mocked";
    cy.visit(url);
    cy.contains(mockResponse);
  });
});
