import { faker } from '@faker-js/faker'

const path = Cypress.env('usersEndpoint')

describe('GET public/v2/users', () => {
  beforeEach(function () {
    this.userData = {
      name: 'auto_' + faker.person.fullName(),
      email: faker.internet.email(),
      gender: 'Male',
      status: 'Active'
    }

    cy.POSTrequest(path, this.userData).then(response => {
      this.newUser = response.body
    })
  })

  it('should get all users', function () {
    cy.GETrequest(path)
      .then(response => {
        expect(response.status).to.eql(200)
        expect(response.body).to.have.length.greaterThan(1)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it('should get user by id /id', function () {
   cy.GETrequestById(path, this.newUser.id)
      .then(response => {
        expect(response.status).to.eql(200)
        expect(response.body.id).to.eql(this.newUser.id)
        expect(response.body.name).to.be.eql(this.newUser.name)
        expect(response.body.email).to.be.eql(this.newUser.email)
        expect(response.body.status).to.be.eql(this.newUser.status)
        expect(response.body.gender).to.be.eql(this.newUser.gender)
      })
  })

  it('should receive error for invalid user id', function () {
    cy.GETrequestById(path, faker.number.int())
      .then(response => {
        expect(response.status).to.eql(404)
        expect(response.body.message).to.eql('Resource not found')
      })
  })
})
