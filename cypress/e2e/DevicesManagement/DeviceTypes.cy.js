/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {    
       cy.visit('https://test-goat.tekkon.com.np/admin/login')
       cy.get('#email').type('admin@admin.com')
       cy.get('#password').type('#t3k@d2021*')
       cy.get('.signin').contains('Login').click()
       cy.get('.hamburger-inner').click()
       cy.get('.title').contains('Device Management').click()
       cy.get('.title').contains('Device Types').click()
       //Assertion
     })

     it('Adds New', () => {
        cy.get('.btn-add-new>.voyager-plus').click()
     })






















    })