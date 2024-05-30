describe('Test Main App', () => {
  beforeEach('visit main page', () => {
    cy.visit('http://localhost:5173/');
  });

  it('check render correctly', () => {
    cy.contains('Vite + React');
  });

  it('check increase button', () => {
    cy.contains('count is 0');
    cy.get("[data-testid='button-count']").click();
    cy.contains('count is 1');
  });
});

