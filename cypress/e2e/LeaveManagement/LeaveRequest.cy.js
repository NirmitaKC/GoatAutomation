/// <reference types="Cypress" />

describe('LOGS in to GOAT and navigates to LEAVE REQUEST', () => {
    beforeEach(() => {   
    
       cy.visit('https://test-goat.tekkon.com.np/admin/login')
       cy.contains('h1', 'TEKKON GOAT').should('be.visible')
        
       cy.get('#email').and('have.attr', 'placeholder', 'E-mail').type('admin@admin.com')
       cy.get('#password').and('have.attr', 'placeholder', 'Password').type('#t3k@d2021*')
       cy.get('.signin').contains('Login').click()
       //cy.get('.breadcrumb > .active').should('be.visible')
       
       cy.get('span.hamburger-inner').should('exist').should('have.class', 'hamburger-inner').click()
       cy.get('.title').contains('Leave Management').click()
       cy.get('.title').contains('Leave Requests').click()
       cy.get('.page-title').should('be.visible')
    })
       
    it('Verifies that dropdown for Fiscal Year is functional', () => { 
        cy.get('.select2-selection__arrow').first().click()
        cy.get('.select2-dropdown--below').should('be.visible')
        cy.contains('li','2022/2023').click()
    })

    it('Verifies that dropdown for Months is functional', () => { 
        cy.get('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)').click()
        cy.get('#select2-fiscalMonth-results').should('be.visible')
        cy.contains('li', 'March').click()
               
    })

    it('Verifies that dropdown for Status is functional', () => { 
        cy.get('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)').click()
        cy.get('.select2-results').should('be.visible')
        cy.contains('li', 'Pending').click()
        
    })

    it('Verifies that the admin can choose the number of entries to be shown from the menulist', () => {
        cy.get('#leaveDataTable>tbody>tr').should('have.length', 10);
    })

    it('Verifies that Searches button is functional and at least one data is shown on the table', () => {
        cy.get('input[type=\'search\']').type('Shya')
        cy.get('.col-sm-12 tbody tr:not([role="row"])').should('be.visible')
    })

    it('Verifies that Add New Button is fuctional', () => {
        cy.get('.btn.btn-success.btn-add-new').click()
        cy.get('div[class=\'panel panel-bordered\'] div[class=\'panel-body\']').should('be.visible')
        cy.get('span[role=\'presentation\']').click()
        cy.get('input[role=\'searchbox\']').should('be.visible')
        cy.get('input[role=\'searchbox\']').type('Test Admin{enter}')
        //cy.get('#leaveCalendar').click()
        //cy.get('.dayContainer').should('be.visible')
        //cy.get('span[aria-label=\'May 11, 2023\']').click() HOW DO I CLOSE CALENDER
        //cy.get('#leave_type').click() --- COULDN'T AUTOMATE TO SELECT LEAVE TYPE
        cy.get('#remarks').type('RemarksRemarksRemarksRemarksRemarksRemarksRemarksRemarksRemarksRemarksRemarks')
        cy.get('#leaveApply').contains('Add').click()
        cy.get('.page-title').should('be.visible')
    })

    it('Verifies that Export Button is fuctional', () => {
        cy.get('button[title=\'Export\']').click()
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('input[role=\'searchbox\']').type('Test Admin{enter}')
        cy.get('#exportBtn').contains('Export').click()
        //ASSERTION OF DOWNLOAD SRARTS
        cy.readFile('cypress/downloads/leave_request.xlsx').should('exist')
    })

    
        
    it('Verifies that Update Status dropdown in Action Column of the table is fuctional', () => {      
        cy.get('tbody tr:nth-child(1) td:nth-child(10) div:nth-child(1) select:nth-child(1)').select('Approve').should('have.value', '385')
        cy.get('.swal2-header').should('be.visible')

    })






})