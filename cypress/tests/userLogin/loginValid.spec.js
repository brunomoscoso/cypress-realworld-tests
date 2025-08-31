
describe('Successful new user login', () => {
    it('Should log in a new user with valid information', () => {
        cy.fixture('user').then((user) => {
        cy.loginUI(user.userName, user.password);
        cy.contains('Get Started with Real World App').should('be.visible');
    })

    });
});