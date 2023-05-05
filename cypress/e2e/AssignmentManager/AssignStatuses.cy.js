/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Status').click()
      //Assertion
    })

    it('Add New', () => {
        cy.get('.voyager-plus').click()
        
    })

    /* No Option To Select to delete
    it.only('Bulk Deletes', () => {
        cy.get('tr>.sorting>.select_all').click()
        cy.contains('span', 'Bulk Delete').click()
        cy.get('.btn').contains('Cancel').click()
        
    })
    */
    
    it('Searches', () => {
        cy.contains('label', 'Search:').type('Tea')   
    })

    it('Shows', () => {
        cy.get('#dataTable_length > label > .form-control').select('50').should('have.value', '50')
        
    })
    it('edits assignment status', () => {
        cy.get(':nth-child(1) > .no-sort > .btn-primary > .voyager-edit').click()
        //cy.get('#assignment_picker').click()
        //cy.get('#select2-type-as-container').click()
       // cy.get('#select2-customer_sentiment-container').click()
        //cy.get('.panel-body > :nth-child(4) > .form-control').type('TEST')
        //cy.get('.panel-footer > .btn').click()

        
    })

    it('Deletes', () => {
        cy.get('#delete-10').click()
        cy.get('#delete_modal > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()
        
    })

    it.only('Views Assignments Status', () => {
        cy.get(':nth-child(1) > .no-sort > .btn-warning > .voyager-eye').click()
    })







})