/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Logs').click()
      //Assertion
    })

      
    /*
    it.only('Filter By Assignments', () => {
        cy.get('.select2-selection__arrow').click()
        cy.contains('li', '50 - SpacetoCo - Rubi Singh Maharjan - Full Stack Developer').click()
        
    })
    */

    it('Show Inactive Assignments', () => {
        cy.get('#inactiveAssignments').click()
       
        
    })

    

















})