class DashboardPage {
  static widgetsNames = {
    timeAtWork: 'Time at Work',
    myActions: 'My Actions',
    quickLaunch: 'Quick Launch',
    buzzLatestPosts: 'Buzz Latest Posts',
    employeeOnLeave: 'Employees on Leave Today',
    employeeDistByUnit: 'Employee Distribution by Sub Unit',
    employeeDistByLocation: 'Employee Distribution by Location'
  }
  
  visit () {
    cy.visit('/')
  }

  get getwidgetsNames () {
    return cy.get('.orangehrm-dashboard-widget-name')
  }
}

export const dashboardPageObj = new DashboardPage()
export const widgetsNames = DashboardPage.widgetsNames
