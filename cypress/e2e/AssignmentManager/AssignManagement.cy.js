/// <reference types="Cypress" />

const { initial, add } = require("cypress/types/lodash")

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Management').click()
      //Assertion
    })

    it('Watches', () => {
        cy.get('#watching-btn').first().click()
        
    })

    it('Filters by Assignment Status', () => {
        cy.get('.select2-search__field').click()
        cy.contains('li', 'Active-Recruiting').click()
        
    })

    it('Filters by Supervisor', () => {
        cy.get('.select2-selection__placeholder').contains('Filter by supervisor').click()
        cy.contains('li', 'Bhuwan Ojha').click()       
    })

    it('Searches', () => {
        cy.contains('label', 'Search:').type('Opax')   
    })

    it('Adds Comment', () => {
        cy.get('td > .btn > .voyager-chat').first().click()
         
    })
    it.only('Views Assignment', () => {
        cy.contains('a', 'A11').click()
         
    })

})