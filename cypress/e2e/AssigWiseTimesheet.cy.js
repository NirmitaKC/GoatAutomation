/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Timesheets').click()
      //Assertion
    })

    it('Exports', () => {
        cy.get('.btn-back>.btn').click()
        
    })

    it('Billable Assignments checkbox', () => {
        cy.get('#billableAssignments').click()
        cy.get('#billableAssignments').click()
        
    })

    it('Searches', () => {
        cy.get('label > .form-control').click()
        
    })
    /*
    it.only('Picks Date', () => {
        cy.get('label > .form-control').click()
        
    })
    */









})