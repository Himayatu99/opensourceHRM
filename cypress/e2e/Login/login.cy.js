/// <reference types="cypress" />

import loginone from '../../selectors/loginone.cy.js';

const username = 'Admin'
const password = 'admin123'
const usernamesecond = 'admin343'
const passwordsecond = 'admin'


describe('Login', () => {
  before(() => {
    cy.originLogin(username, password)
  })
  // it('should not successfuly login', () => {
  //   cy.originLoginnotlogin(usernamesecond, passwordsecond);
  // });
  it('should be successfuly login', () => {
    cy.originLogin(username, password);
    // cy.get('.oxd-layout-context').should('be.visible')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains(loginone.headers).should('contain', 'Dashboard')
    // site bar 
    cy.get(loginone.siderbutton).should('be.visible')
    //****Verify the site bar */
    cy.contains(loginone.admin).should('contain', 'Admin')
    cy.contains(loginone.PIM).should('contain', 'PIM')
    cy.contains(loginone.Leave).should('contain', 'Leave')
    cy.contains(loginone.Time).should('contain', 'Time')
    cy.contains(loginone.Recruitment).should('contain', 'Recruitment')
    cy.contains(loginone.MyInfo).should('contain', 'My Info')
    cy.contains(loginone.Performance).should('contain', 'Performance')
    cy.contains(loginone.Maintenance).should('contain', 'Maintenance')
    cy.contains(loginone.Claim).should('contain', 'Claim')
    cy.contains(loginone.Buzz).should('contain', 'Buzz')


  });
});

