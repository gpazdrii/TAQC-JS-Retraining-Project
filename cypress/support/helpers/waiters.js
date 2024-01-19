Cypress.Commands.add('waitForPageToLoad', () => {
  cy.get('[class="oxd-form-loader"]', { timeout: 7000 }).should('not.exist')
})

Cypress.Commands.add('waitForTableToLoad', () => {
  cy.get('.oxd-table-loader', { timeout: 7000 }).should('not.exist')
})