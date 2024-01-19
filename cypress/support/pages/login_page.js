class LoginPage {
  static invalidCredencialsMsgText = 'Invalid credentials'
  static missingRequiredFiledsMsgText = 'Required'

  get invalidCredencialsMsg () {
    return cy.get('[data-v-87fcf455][data-v-358db50f]')
  }

  get missingCredentialsMsg () {
    return cy.get('[data-v-7b563373][data-v-957b4417]')
  }

  get userNameInput () {
    return cy.get('[name="username"]')
  }

  get passwordInput () {
    return cy.get('[name="password"]')
  }

  setUserName (login) {
    this.userNameInput.type(login)
  }

  setUserPassword (password) {
    this.passwordInput.type(password)
  }

  clickLoginButton () {
    cy.get('.orangehrm-login-button').click()
  }
}

export const loginPage = new LoginPage()
export const invalidCredencialsMsgText = LoginPage.invalidCredencialsMsgText
export const missingCredencialsMsgText = LoginPage.missingRequiredFiledsMsgText