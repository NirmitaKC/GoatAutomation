/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
   beforeEach(() => {    
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Device Management').click()
      cy.get('.title').contains('Devices').click()
      //Assertion
    })
    
        it('Adds New', () => {
            cy.contains('span', 'Add New').click()
            cy.get('#title').type('pTest')
            cy.get('#select2-device_type_id-container').contains('Select Device Type').click()
            cy.contains('li', 'Television').click()
            //cy.get('#serial_number').contains('[placeholder="Serial Number"]').type('12345')
            cy.get('#serial_number').type('12345')
            cy.get(':nth-child(5) > .form-control').type('dummyData')
            cy.get('#brand').type('pDell')
            cy.get(':nth-child(8) > .form-control').type('NoRemarks')
            cy.get('#purchase_date').click()
            cy.get(':nth-child(11) > .btn').click()
        })

        it('Export Not Assigned Employee List', () => {
            cy.get('#exportNotAssignedEmployeeListBtn').click()
            cy.get('#exportNotAssignedEmployeeListModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
            cy.get('.select2-search__field').click()
        })

        it('Filters by Select Device Type', () => {
            cy.get('.select2-search__field').click()
            cy.contains('li', 'Monitor').click()
        })

        it('Shows Entries', () => {
            cy.get('[name="deviceDataTable_length"]').select('50').should('have.value', '50')
        })

        it('Searches', () => {
            cy.get('#deviceDataTable_filter > label > .form-control').type('tele')
        })

        it('Assignable', () => {
            cy.get('.toggle-handle').click()
        })

        it('Filters by Select Status', () => {
            cy.get('.select2-selection__arrow').click()
            cy.contains('li', 'All').click()
        })

        it('Exports', () => {
            cy.get('#exportButton').click()
        })

        it('Actions Comment', () => {
            cy.get(':nth-child(1) > :nth-child(10) > :nth-child(1) > :nth-child(2) > .btn').click()
            cy.get('#comment').type('dummyData')
            cy.get('#add_comment').click()
        })

        it('Actions Delete', () => {
            //cy.get('.voyager-trash').click()
            cy.get('#delete-59 > .voyager-trash').click()
            cy.get('#delete_modal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
            
        })

        it('Actions Edit', () => {
            cy.get(':nth-child(1) > :nth-child(10) > :nth-child(1) > :nth-child(1) > .btn').click()
            cy.get(':nth-child(11) > .btn').click()    
        })

        it.only('Views Device Logs', () => {
            cy.get(':nth-child(1) > :nth-child(1) > .btn > .voyager-eye').click()
        })












})