class AddUserPage {
  setUserName (userName) {
    cy.contains('.oxd-label', 'Username')
      .parents('.oxd-input-group')
      .find('[data-v-1f99f73c]')
      .clear()
      .type(userName)
    return this
  }

  selectRandomUserRole () {
    cy.contains('.oxd-input-group__label-wrapper', 'User Role')
      .parents('.oxd-input-group').as('userRoleInput')
    cy.get('@userRoleInput').find('.oxd-select-wrapper').click()
    cy.get('@userRoleInput').find('span[data-v-13cf171c]').then(options => {
      cy.sample(options).click()
    })

    return this
  }

  selectRandomStatus () {
    cy.contains('.oxd-input-group__label-wrapper', 'Status')
      .parents('.oxd-input-group').as('userRoleInput')
    cy.get('@userRoleInput').find('.oxd-select-wrapper').click()
    cy.get('@userRoleInput').find('span[data-v-13cf171c]').then(options => {
      cy.sample(options).click()
    })

    return this
  }

  setPassword (password) {
    cy.get('[type="password"]').each(el => {
      cy.wrap(el).type(password)
    })

    return this
  }

  setEmployeeName (name) {
    cy.get('.oxd-autocomplete-wrapper').as('employeeName')
    cy.get('@employeeName').click()
    cy.get('@employeeName').type(name)
    cy.get('@employeeName').find('[data-v-1ccb3a64]').then(options => {
      cy.sample(options).click()
    })

    return this
  }
  
  clickSubmit () {
    cy.get('[type="submit"]').click()
  }
}

export const addUserPage = new AddUserPage()