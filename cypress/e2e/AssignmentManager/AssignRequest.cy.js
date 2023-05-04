/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Requests').click()
      //Assertion
    })

    it('Watches', () => {
        cy.get('#watching-btn').first().click()
        
    })

    it('Filters by Assignment Request Status', () => {
        cy.get('.select2-search__field').click()
        cy.contains('li', 'Active-Recruiting').click()
        
    })
    
    it.only('Filters by Column', () => {
        cy.get('#date_column').first().select('created_at').should('have.value', 'created_at')       
    })
    

    it('Add New', () => {
        cy.get('.voyager-plus').click()
        
    })

    it('Searches', () => {
        cy.contains('label', 'Search:').type('Sieme')   
    })

    it('Views Assignments', () => {
        cy.contains('label', 'Search:').type('Sieme')   
    })

    it('Edits Assignments', () => {
        cy.get('td > a > .btn > .voyager-edit').first().click()   
    })

    it('Add Assignment Comment', () => {
        cy.get('td > a > .btn > .voyager-chat').first().click()   
    })











}) 