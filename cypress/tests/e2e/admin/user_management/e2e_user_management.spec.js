import { userManagementPage } from "../../../../support/pages/admin/user_management/user_management_page"
import { addUserPage } from "../../../../support/pages/admin/user_management/add_user_page"
import { noRecordsText } from "../../../../support/pages/admin/user_management/user_management_page"
import { faker } from '@faker-js/faker'

describe('Verifying Admin / User management', () => {
  beforeEach(function () {
    cy.login()
    cy.openMenuItem('Admin')
    this.savedUserName = 'auto_' + faker.string.alpha(5)
    userManagementPage.clickAddButton()
    addUserPage.setUserName(this.savedUserName)
      .selectRandomUserRole()
      .selectRandomStatus()
      .setPassword(faker.internet.password({ length: 10 }) + faker.number.int({ length: 1}))
      .setEmployeeName(faker.string.fromCharacters('abcd'))
      .clickSubmit()
    cy.waitForPageToLoad()
  })

  it('should add a new user', function () {
    // tag: user_management
    // tag: regression
    userManagementPage.setUsername(this.savedUserName).clickSearch()
    cy.waitForTableToLoad()
    userManagementPage.getTable().should('contain', this.savedUserName)
  })

  it('should delete a new user', function () {
    // tag: user_management
    // tag: regression
    userManagementPage.setUsername(this.savedUserName).clickSearch()
    cy.waitForTableToLoad()
    userManagementPage.clickDelete(this.savedUserName).clickYesDelete()
    cy.waitForTableToLoad()
    cy.contains(noRecordsText).should('be.visible')
  })

  it('should edit a new user', function () {
    // tag: user_management
    // tag: regression
    userManagementPage.setUsername(this.savedUserName).clickSearch()
    cy.waitForTableToLoad()
    userManagementPage.clickEdit()
    const newName = 'auto_' + faker.string.alpha(5)
    addUserPage.setUserName(newName).clickSubmit()
    cy.waitForPageToLoad()
    userManagementPage.setUsername(newName).clickSearch()
    cy.waitForTableToLoad()
    userManagementPage.getTable().should('contain', newName)
  })
})