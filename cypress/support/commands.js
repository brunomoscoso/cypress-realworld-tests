Cypress.Commands.add('loginUI', (userName, password) => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signin-username"]').type(userName)
    cy.get('[data-test="signin-password"]').type(password)
    cy.get('[data-test="signin-remember-me"]').click()
    cy.get('[data-test="signin-submit"]').click()
});