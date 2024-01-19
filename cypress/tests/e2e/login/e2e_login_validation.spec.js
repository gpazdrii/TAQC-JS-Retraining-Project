import { loginPage } from "../../../support/pages/login_page"
import { invalidCredencialsMsgText } from "../../../support/pages/login_page"
import { missingCredencialsMsgText } from "../../../support/pages/login_page"

describe('Login validation', () => {
  beforeEach(function () {
    cy.fixture('login/invalid_credentials.json').then(user => {
      this.invalidUser = user
    })

    cy.openLoginPage()
  })

  it('should validate incorrect credentials', function () {
    // tag: login
    // tag: regression
    loginPage.setUserName(this.invalidUser.username)
    loginPage.setUserPassword(this.invalidUser.password)
    loginPage.clickLoginButton()
    loginPage.invalidCredencialsMsg.should('have.text', invalidCredencialsMsgText)
  })

  it('should validate missing password', function () {
    // tag: login
    loginPage.setUserName(this.invalidUser.username)
    loginPage.clickLoginButton()
    loginPage.missingCredentialsMsg.should('have.length', 1)
    loginPage.missingCredentialsMsg.should('have.text', missingCredencialsMsgText)
  })

  it('should validate missing username', function () {
    // tag: login
    loginPage.setUserPassword(this.invalidUser.password)
    loginPage.clickLoginButton()
    loginPage.missingCredentialsMsg.should('have.length', 1)
    loginPage.missingCredentialsMsg.should('have.text', missingCredencialsMsgText)
  })
})
