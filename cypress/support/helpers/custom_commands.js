Cypress.Commands.add('sample', (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
})
