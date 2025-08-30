
describe('Successful new user login', () => {
    it('Should log in a new user with valid information', () => {
        cy.fixture('user').then((user) => {
        cy.visit('http://localhost:3000/signin');
        cy.get('[data-test="signin-username"]').type(user.userName);
        cy.get('[data-test="signin-password"]').type(user.password);
        cy.get('[data-test="signin-remember-me"]').click();
        cy.get('[data-test="signin-submit"]').click();
        cy.contains('Get Started with Real World App').should('be.visible');
    })

    });
});