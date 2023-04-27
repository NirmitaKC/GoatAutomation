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
        
        // Verify newly added device is displayed cy.contains('td', 'dummyTestDeviceType')---> :     
        cy.get('.col-sm-12').last().within(() => {       
        cy.get('td').eq(0).should('contain', randomString);
        cy.get('td').eq(1).should('contain', 'Descriptionnnnnnn');
        });



     })

     it('Verify that the admin can choose the number of entries to be shown from the menulist', () => {
        cy.get('[name="dataTable_length"]').select('25').should('have.value', '25')
        cy.get('.col-sm-12 tr').should('have.length', 26);
        // verify the row of the table -> 25
     })

     it('Bulk Deletes', () => {
        cy.get('#bulk_delete_btn').click()
        // TO-DO : Not able to select multiple devices - bug - test cases yet to be added
     })

     it('Searches', () => {
        cy.get('#dataTable_filter > label > .form-control').type('bro')

        cy.get('.col-sm-12 tbody tr:not([role="row"])').should('be.visible')
        // Verify at least one data is displayed on the table 
     })

     it('Actions-View', () => {
        cy.get('.view>.voyager-eye').first().click()
        // Verify url or verify something on the page - title, device name
     })

     it('Actions-Edit', () => {
        cy.get('.edit>.voyager-edit').first().click()
        // Update all the data, save and verify updated data is displayed on the table
        // first maa test-devicename and you changed the device name to nottest - verify nottest is available on the table
        // If not displayed on the table then search and verify (in case)
     })

     it('Actions-Delete', () => {
        cy.get('#delete-12>.voyager-trash').first().click()
        // Verify deleted data is not displayed on the table - try to search
     })

     it('Goes to next page', () => {
        cy.get('#dataTable_next > a').click()
        // verify text change from 1-10 to 11-20
     })

     // TO-DO : Random name generate
     // Table assertion


    })