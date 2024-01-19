import { faker } from '@faker-js/faker'

const path = Cypress.env('usersEndpoint')

describe('POST public/v2/users', () => {
  beforeEach(function () {
    this.userData = {
      name: 'auto_' + faker.person.fullName(),
      email: faker.internet.email(),
      gender: 'male',
      status: 'active'
    }
  })

  it('should post new member', function () {
    cy.POSTrequest(path, this.userData).then(response => {
      expect(response.status).to.eql(201)
      expect(response.body.id).to.be
      expect(response.body.name).to.be.eql(this.userData.name)
      expect(response.body.email).to.be.eql(this.userData.email)
      expect(response.body.status).to.be.eql(this.userData.status)
      expect(response.body.gender).to.be.eql(this.userData.gender)
    })
  })

  it('should receive an error for missing params ', function () {
    cy.POSTrequest(path, {
      name: 'auto_' + faker.person.fullName(),
      email: faker.internet.email(),
      gender: 'Male'
    })
      .then(response => {
        expect(response.status).to.eql(422)
        expect(response.body[0].message).to.eql("can't be blank")
      })
  })
})
