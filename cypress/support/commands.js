// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const url = Cypress.env('baseUrl');


//should sccuessful login 
Cypress.Commands.add('originLogin', (username, password) => {
      cy.visit(url);
      cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.contains(' Login ').should('contain', ' Login ').click()
      cy.contains('Required').should('contain', 'Required')
      cy.get('[name="username"]').type(username);
      cy.get('[placeholder="Password"]').type(password);
      cy.contains(' Login ').should('contain', ' Login ').click()




})
//should not login sccuessful 
Cypress.Commands.add('originLoginnotlogin', (usernamesecond, passwordsecond) => {
      cy.visit(url);
      cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.contains(' Login ').should('contain', ' Login ').click()
      cy.contains('Required').should('contain', 'Required')
      cy.get('[name="username"]').type(usernamesecond);
      cy.get('[placeholder="Password"]').type(passwordsecond);
      cy.contains(' Login ').should('contain', ' Login ').click()
      cy.contains('Invalid credentials').should('contain', 'Invalid credentials')


})