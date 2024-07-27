// Environment variables for URLs and credentials

// const url = Cypress.env('baseUrl');

const url = Cypress.env('baseUrl');

describe('', () => {
  it('passes', () => {
    cy.visit(url); // Use the 'url' variable here
  });
});

