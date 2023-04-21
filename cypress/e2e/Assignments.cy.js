/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      //Assertion
    }) 
  
   
    it('Assignments', () => {
        cy.get('.hamburger-inner').click()
        cy.get('.title').contains('Assignment Manager').click()
        cy.get('.title').contains('Assignments').click()
        // Assertion
    })

    /*
    it('Assignments', () => {
        cy.get('.voyager-cloud-download').click()
        cy.contains('span', '×').click()
    })

    it('Assignments', () => {
        cy.get('#watching-btn').contains(' Watching').click()
        cy.get('.swal2-cancel').click()
        cy.get('.swal2-confirm').click()
    })

    it('Assignments', () => {
        cy.get('.voyager-plus').click()
        cy.get('[name="title"]').type('test101')
        //cy.get('#select2-client_companyFK-container').click()
        //cy.get('#select2-client_companyFK-result-wtz2-5').click() DROPDOWN
        cy.get('.btn-back').contains('Back').click()
        cy.get('#dataTable_filter').contains('Search:').type('test')
        //cy.contains('span','hidden-xs hidden-sm').click() EDIT
        cy.get('#delete-290').click()
        //('.voyager-edit').first().click()
        ('.voyager-dollar').second
    })
    */

    it('Bulk Delete', () => {
        cy.visit('https://test-goat.tekkon.com.np/admin/assignments')
        cy.get('.select_all').click()
        cy.get('#bulk_delete_btn').contains('Bulk Delete').click()
        cy.get('.btn').contains('Cancel').click()
    })

    it.only('Edit Assign', () => {
        cy.visit('https://test-goat.tekkon.com.np/admin/assignments')
        cy.get('td > a > .btn > .voyager-edit').first().click()
    })






})