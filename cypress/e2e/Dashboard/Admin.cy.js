/// <reference types="cypress" />

import loginone from '../../selectors/loginone.cy.js';

const username = 'Admin'
const password = 'admin123'


describe('Admin', () => {
      beforeEach(() => {
            cy.originLogin(username, password)
      })
      it('verify all the the required fields ', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //****Verify the site bar */
            cy.contains(loginone.admin).should('contain', 'Admin').click()
            cy.url().should('include', 'admin')
            cy.contains('Admin').should('contain', 'Admin')
            cy.contains('User Management').should('contain', 'User Management')


      });
      it('should be add user', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //****Verify the site bar */
            cy.contains(loginone.admin).should('contain', 'Admin').click()
            cy.url().should('include', 'admin')
            cy.get('.orangehrm-header-container > .oxd-button').click()
            cy.contains('Add User').should('contain', 'Add User')

            // User Role *
            cy.contains('User Role').should('contain', 'User Role')
            cy.contains('-- Select --').click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()

            // Employee Name
            cy.contains('Employee Name').should('contain', 'Employee Name')
            cy.get('.oxd-autocomplete-text-input > input').click().type('manda')
            cy.get('span[data-v-08ed484c]').click()

            // Status
            cy.contains('Status').should('contain', 'Status')
            cy.contains('-- Select --').click()
            cy.contains('Enabled').click()

            // Username
            cy.contains('Username').should('contain', 'Username')
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Test5')

            // Password
            cy.contains('Password').should('contain', 'Password')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin123')

            // Confirm Password
            cy.contains('Confirm Password').should('contain', 'Confirm Password')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin123')

            //save button
            cy.get('.oxd-button--secondary').click()
            //

            //verify the 
            cy.contains('Success').should('contain', 'Success')
            cy.contains('Successfully').should('contain', 'Successfully')


      });
      it('verify the search funtionailty', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //****Verify the site bar */
            cy.contains(loginone.admin).should('contain', 'Admin').click()
            cy.url().should('include', 'admin')

            cy.get('.oxd-form-actions > .oxd-button--secondary').click()
            //
            cy.scrollTo('bottom', { duration: 2000 })
            cy.contains('Test5').should('contain', 'Test5')




      });
      it('verify the delete funtionailty', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //****Verify the site bar */
            cy.contains(loginone.admin).should('contain', 'Admin').click()
            cy.url().should('include', 'admin')

            cy.get('.oxd-form-actions > .oxd-button--secondary').click()
            //
            cy.scrollTo('bottom', { duration: 2000 })
            cy.get(':nth-child(4) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
            cy.get('.oxd-button--label-danger').click()




      });


});

