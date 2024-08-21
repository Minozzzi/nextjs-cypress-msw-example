describe("client page", () => {
  const url = "http://localhost:3000/client";

  it("passes1", () => {
    const mockResponse = "this is mock response";
    cy.mockMSW({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "get",
      response: { id: 1, title: mockResponse },
    });

    cy.visit(url);

    cy.contains(mockResponse);
  });

  it("passes2", () => {
    cy.visit(url);

    cy.contains("delectus aut autem");
  });

  it("passes3", () => {
    const mockResponse = "new response";
    cy.mockMSW({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "get",
      response: { id: 1, title: mockResponse },
    });

    cy.visit(url);

    cy.contains(mockResponse);
  });
});
