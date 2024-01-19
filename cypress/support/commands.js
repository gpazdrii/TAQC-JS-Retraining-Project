import { loginPage } from "./pages/login_page"

Cypress.Commands.add('login', (usr, pswd) => {
  const login = usr || 'Admin'
  const password = pswd || 'admin123'

  cy.session(
    [login, password], 
    () => {
      cy.visit('/')
      loginPage.userNameInput.type(login)
      loginPage.passwordInput.type(password).type('{enter}')
    },
    {
      validate () {
        cy.url().should('contain', 'dashboard')
      }
    }
  )
})

Cypress.Commands.add('openLoginPage', () => {
  Cypress.session.clearAllSavedSessions() 

  cy.session(
    [], 
    () => {
      cy.visit('/')
    },
    {
      validate () {
        cy.url().should('contain', 'login')
      }
    }
  )
})

Cypress.Commands.add('openMenuItem', (menuItemName) => {
  cy.contains('[class="oxd-main-menu-item-wrapper"]', menuItemName).click()
})
