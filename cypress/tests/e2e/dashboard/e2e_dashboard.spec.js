import { dashboardPageObj } from "../../../support/pages/dashboard_page"
import { widgetsNames } from "../../../support/pages/dashboard_page"

describe ('Verifying dashboard page', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should have all widgets', () => {
    // tag: dashboard
    // tag: regression
    dashboardPageObj.getwidgetsNames
    .should('have.length', Object.keys(widgetsNames).length)
    .should('contain', widgetsNames.timeAtWork)
    .should('contain', widgetsNames.myActions)
    .should('contain', widgetsNames.quickLaunch)
    .should('contain', widgetsNames.buzzLatestPosts)
    .should('contain', widgetsNames.employeeOnLeave)
    .should('contain', widgetsNames.employeeDistByUnit)
    .should('contain', widgetsNames.employeeDistByLocation)
  })
})
