/// <reference types="Cypress" />

describe('LOGS in to GOAT and navigates to LEAVE APPLY', () => {
    beforeEach(() => {   
       cy.visit('https://test-goat.tekkon.com.np/admin/login')
       cy.contains('h1', 'TEKKON GOAT').should('be.visible')
        
       cy.get('#email').and('have.attr', 'placeholder', 'E-mail').type('admin@admin.com')
       cy.get('#password').and('have.attr', 'placeholder', 'Password').type('#t3k@d2021*')
       cy.get('.signin').contains('Login').click()
       //cy.get('.breadcrumb > .active').should('be.visible')
      
       cy.get('span.hamburger-inner').should('exist').should('have.class', 'hamburger-inner').click()
       cy.get('.title').contains('Leave Management').click()
       cy.get('.title').contains('Leave Apply').click()
       cy.get('.page-title').should('be.visible')
    })

    it('Verifies that Apply for Leave section at the right side of the page is functional', () => { 
        cy.get('span[aria-label=\'May 4, 2023\']').first().click()
        cy.get('#days-selected').should('be.visible')
        cy.get('#leave_type').select('sick leave').should('have.value', 'sick leave')
        cy.get('#remarks').type('Migrane')
        cy.get('.btn.btn-info.float-right.mb-1').click()
        cy.get('.d-flex.justify-content-between').should('be.visible')
    })

    it('Verifies that the admin can choose the number of entries to be shown from the menulist', () => {
        cy.get('#leaveDataTable>tbody>tr').should('have.length', 10);
    })

    it('Verifies that View All Request Button is functional', () => {
        cy.get('#view_all_request').contains('View All Request').click();
        cy.get('.page-title').should('be.visible')
    })













})