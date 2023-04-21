/// <reference types="Cypress" />

describe('logs in to GOAT', () => {
    beforeEach(() => {
      cy.visit('https://test-goat.tekkon.com.np/admin/login')
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('#t3k@d2021*')
      cy.get('.signin').contains('Login').click()
      cy.get('.hamburger-inner').click()
      cy.get('.title').contains('Assignment Manager').click()
      cy.get('.title').contains('Assignment Billing').click()
      //Assertion
    }) 
  
    
    it('Filters by Billable', () => {
        cy.get('#isBillable').click()
        //Assertion
        
    })


    it('Filters by Companies', () => {
        cy.get('.select2-selection__rendered').contains('All Companies').click()
        // cy.get('#select2-company_picker-container').should('have.value', '36').click()
        cy.contains('li', '36').click()

    })

    it('Filters All assignments by Typing', () => {
        cy.contains('span','All Assignments').type('Space{enter}')
    })

    it('Filters All assignments by Selection', () => {
        cy.contains('span','All Assignments').click()
        cy.contains('li','53 - Startup News- Bishal Adhikari - Wordpress Developer').click() //SPACE THINGY 
    })
    
    it('Filters By Date', () => {
        cy.get('#date-filter').click()
        cy.get('[data-range-key="Last 7 Days"]').click()
        cy.get('.select2-search__field').click()
    })

    it('Assignment Status', () => {
        cy.get('.select2-search__field').click()
        cy.contains('li', 'New-Enquiry').click()
    })

    it('Search', () => {
        cy.contains('label', 'Search:').type('Fin')
    })

    it('Clicks on ID', () => {
        cy.contains('a', 'A2').click('')
    })

    it('Add Invoice', () => {
        cy.get('td > a > .btn > .voyager-dollar').first().click()
    })

    it('Adds Assignment Comment', () => {
        cy.get('td > a > .btn > .voyager-chat').first().click()
    })

    it('Add Quickbook', () => {
        cy.get('[href="https://c17.qbo.intuit.com/app/search?searchCat=transaction&searchTransactionType=x4&searchValue=&searchAdvFieldArray=refno&searchAdvFieldLabelArray=Invoice%20no.&searchAdvValueArray=2177&searchAdvValueLabelArray=2177&searchAdvOpArray=%3D"] > .btn > img').click()
    })






})