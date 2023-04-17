Cypress.Commands.add('admin_login', () => {
    cy.visit('https://test-goat.tekkon.com.np/admin/login')
    cy.get('#email').type(Cypress.env('ADMIN_USERNAME'))
    cy.get('#password').type(Cypress.env('ADMIN_PASSWORD'))
    cy.get('.signin').click()
  })

  Cypress.Commands.add('hr_login', () => {
    cy.visit('https://test-goat.tekkon.com.np/admin/login')
    cy.get('#email').type(Cypress.env('ADMIN_USERNAME'))
    cy.get('#password').type(Cypress.env('ADMIN_PASSWORD'))
    cy.get('.signin').click()
  })