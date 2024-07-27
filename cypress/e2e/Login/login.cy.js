/// <reference types="cypress" />

// const url = Cypress.env('baseUrl');
const username = 'Admin'
const password = 'admin123'
const usernamesecond = 'admin343'
const passwordsecond = 'admin'


describe('Login', () => {
  // before(() => {
  //   cy.originLogin(username, password)
  // })
  it('should not successfuly login', () => {
    // cy.visit(url); // Use the 'url' variable here
    cy.originLoginnotlogin(usernamesecond, passwordsecond);
  });
  it('should be successfuly login', () => {
    // cy.visit(url); // Use the 'url' variable here
    cy.originLogin(username, password);
  });
});

