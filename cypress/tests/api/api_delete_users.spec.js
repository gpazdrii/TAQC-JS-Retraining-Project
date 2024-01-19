import { faker } from '@faker-js/faker'

const path = Cypress.env('usersEndpoint')

describe('DELETE public/v2/users', () => {
  beforeEach(function () {
    this.userData = {
      name: 'auto_' + faker.person.fullName(),
      email: faker.internet.email(),
      gender: 'male',
      status: 'active'
    }

    cy.POSTrequest(path, this.userData).then(response => {
      this.newUser = response.body
    })
  })

  it('should delete a user', function () {
    cy.DELETErequestById(path, this.newUser.id)
      .then(response => {
        expect(response.status).to.eql(204)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it('should receive error for invalid user id', function () {
    cy.DELETErequestById(path, faker.number.int())
      .then(response => {
        expect(response.status).to.eql(404)
        expect(response.body.message).to.eql('Resource not found')
      })
  })
})
