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
       
       cy.get('.title').contains('Device Types').click()
       
     })

     it('Verify that the Add New button opens up a form to add a new device and the result is shown in the table', () => {
        cy.get('.btn-add-new>.voyager-plus').click()
        
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.get(':nth-child(1) > .form-control').type(randomString);

        cy.get('.panel-body > :nth-child(2) > .form-control').type('Descriptionnnnnnn')
        cy.get('.panel-footer > .btn').should('contain', ' Save ').click()
        
           
        cy.get('.col-sm-12').last().within(() => {       
        cy.get('td').eq(0).should('contain', randomString);
        cy.get('td').eq(1).should('contain', 'Descriptionnnnnnn');
        });



     })

     it('Verify that the admin can choose the number of entries to be shown from the menulist', () => {
        cy.get('[name="dataTable_length"]').select('25').should('have.value', '25')
        cy.get('.col-sm-12 tr').should('have.length', 26);
        
     })

     it('Bulk Deletes', () => {
        cy.get('#bulk_delete_btn').click()
        
     })

     it('Searches', () => {
        cy.get('#dataTable_filter > label > .form-control').type('bro')

        cy.get('.col-sm-12 tbody tr:not([role="row"])').should('be.visible')
        
     })

     it('Actions-View', () => {
        cy.get('.view>.voyager-eye').first().click()
       
     })

     it('Actions-Edit', () => {
        cy.get('.edit>.voyager-edit').first().click()
        
     })

     it('Actions-Delete', () => {
        cy.get('#delete-12>.voyager-trash').first().click()
       
     })

     it('Goes to next page', () => {
        cy.get('#dataTable_next > a').click()
        
     })


    })