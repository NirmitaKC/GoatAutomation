/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Log Summary').click()
      //Assertion
    })

    it('Exports', () => {
        cy.get('#exportButton').click()
        
    })

    it('Filters By Employees', () => {
        cy.get('.select2-selection__arrow').click()
        cy.contains('li', 'Aashutosh Poudel').click()
        
    })

    it.only('Filters By Date', () => {
        cy.get('.select2-selection__arrow').click()
        cy.contains('li', 'Aashutosh Poudel').click()
        
    })










})