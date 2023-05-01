/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {    
       cy.visit('https://test-goat.tekkon.com.np/admin/login')
       cy.get('#email').and('have.attr', 'placeholder', 'E-mail').type('admin@admin.com')
       cy.get('#password').and('have.attr', 'placeholder', 'Password').type('#t3k@d2021*')
       cy.get('.signin').contains('Login').click()

       
       cy.get('span.hamburger-inner')
        .should('exist')
        .should('have.class', 'hamburger-inner')
        .click()

       cy.get('.title').contains('Device Management').click()
       cy.get('.title').contains('Device Requests').click()
       
     })

     it('Searches', () => {
        cy.get('#deviceDataTable_filter > label > .form-control')
        .should('be.visible')
        .should('have.attr', 'placeholder', '')
        .type('lapt')

     })

     it('Shows Number of Entries', () => {
        cy.get('[name="deviceDataTable_length"]')
        .select('25')
        .should('have.value', '25')
     })

     it('Status', () => {
        cy.get('td>.label-info')
        .first()
        .should('be.visible')
        .should('contain', 'Pending')
        .click();
        

     })

     it('Action-STATUS', () => {
        cy.get('[data-href="https://test-goat.tekkon.com.np/admin/device-request/33"] > :nth-child(7) > .label')
        .click()
     })
     
     it('Action-APPROVE', () => {
        cy.get('[data-href="https://test-goat.tekkon.com.np/admin/device-request/33"] > :nth-child(7) > .label')
        .click()
     })

     














})