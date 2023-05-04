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
       cy.get('.title').contains('Leave Balances').click()
       cy.get('.page-title').should('be.visible')
    })

    it('Verifies that Add New Button is functional and redirects the user to a form', () => {
        cy.get('.btn.btn-success.btn-add-new').click();
        cy.get('.page-title').should('be.visible')

        //FILLING OUT THE FORM
        cy.get('span[role=\'presentation\']').type('Aashutosh Poudel{enter}')
        cy.get('#casual_leave_earned').type('12')
        cy.get('#casual_leave_used').type('1')
        cy.get('#sick_leave_earned').type('6')
        cy.get('#sick_leave_used').type('1')
       
        cy.get(':nth-child(14) > .btn').click()

        //ASSERTING THAT IT IS VISIBLE ON THE TABLE
        //1. Locating the table element 
        cy.get('#leaveDataTable').should('be.visible').within(() => {
        cy.get('tbody tr:nth-child(1) td:nth-child(1)').should('contain', 'Aashutosh Poudel');
        });

        //2. Asserting
        cy.get('#leaveDataTable').should('contain', 'Aashutosh Poudel');
    })












})