class UserManagementPage {
  static noRecordsLabel = 'No Records Found'

  setUsername (name) {
    cy.contains('.oxd-table-filter', 'System Users')
      .contains('.oxd-label', 'Username')
      .parents('.oxd-form-row')
      .find('[class="oxd-input oxd-input--active"]')
      .clear()
      .type(name)

    return this
  }

  clickAddButton () {
    cy.get('[class="orangehrm-header-container"]').contains('button', 'Add').click()
  }

  clickSearch () {
    cy.get('[type="submit"]').click()
  }

  getTable () {
    return cy.get('.oxd-table-card')
  }

  clickDelete () {
    this.getTable().find('.bi-trash').click()
    
    return this
  }

  clickYesDelete () {
    cy.get('.orangehrm-dialog-popup').find('.bi-trash').click()
    
    return this
  }

  clickEdit () {
    this.getTable().find('.bi-pencil-fill').click()
  }
}

export const userManagementPage = new UserManagementPage()
export const noRecordsText = UserManagementPage.noRecordsLabel