Cypress.Commands.add('GETrequest', (path) => {
  cy.request({ 
    method: 'GET', 
    url: Cypress.env('apiURL') + path, 
    headers: { 'authorization': 'Bearer ' + Cypress.env('token') },
    failOnStatusCode: false,
    followRedirect: false
  })
})

Cypress.Commands.add('GETrequestById', (path, id) => {
  cy.request({
    method: 'GET', 
    url: Cypress.env('apiURL') + path + id, 
    headers: { 'authorization': 'Bearer ' + Cypress.env('token') },
    failOnStatusCode: false,
    followRedirect: false
  })
})

Cypress.Commands.add('POSTrequest', (path, params) => {
  cy.request({ 
    method: 'POST', 
    url: Cypress.env('apiURL') + path,
    body: params, 
    headers: { 'authorization': 'Bearer ' + Cypress.env('token') },
    failOnStatusCode: false,
    followRedirect: false
  })
})

Cypress.Commands.add('DELETErequestById', (path, id) => {
  cy.request({ 
    method: 'DELETE', 
    url: Cypress.env('apiURL') + path + id, 
    headers: { 'authorization': 'Bearer ' + Cypress.env('token') },
    failOnStatusCode: false,
    followRedirect: false
  })
})
