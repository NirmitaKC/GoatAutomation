/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Comments').click()
      //Assertion
    })

    it('Watches', () => {
        cy.get('#watch-btn').contains(' Watch').click()
        
    })

    it('Adds New', () => {
        cy.contains('span', 'Add New').click()
        
    })

    it('Bulk Deletes', () => {
        cy.get('tr>.sorting>.select_all').click()
        cy.contains('span', 'Bulk Delete').click()
        cy.get('.btn').contains('Cancel').click()
        
    })

    it('Shows', () => {
        cy.get('#dataTable_length > label > .form-control').select('50').should('have.value', '50')
        
    })
    /* SEARCHES ON BASIS OF WHAT ????
    it.only('Searches', () => {
        cy.get('#dataTable_length > label > .form-control').select('50').should('have.value', '50')
        
    })
    */
    
    it('edits assignment comments', () => {
        cy.get('[data-href="https://test-goat.tekkon.com.np/admin/assignment-comments/3295"] > #bread-actions > .btn-group > .btn-primary').click()
        cy.get('#assignment_picker').click()
        cy.get('#select2-type-as-container').click()
        cy.get('#select2-customer_sentiment-container').click()
        cy.get('.panel-body > :nth-child(4) > .form-control').type('TEST')
        cy.get('.panel-footer > .btn').click()

        
    })

    it('Deletes', () => {
        cy.get('.delete>.voyager-trash').first().click()
        cy.get('#delete_modal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        
    })

    it.only('Views Assignments Comments', () => {
        cy.get('[data-href="https://test-goat.tekkon.com.np/admin/assignment-comments/3295"] > #bread-actions > .btn-group > .btn-warning').click()
        
    })








})