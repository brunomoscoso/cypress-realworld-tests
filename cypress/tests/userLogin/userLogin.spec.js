
describe('Successful new user login', () => {
    it('Should log in a new user with valid information', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        cy.contains('Get Started with Real World App').should('be.visible');
    });
    });
        it('Login should fail with an empty username.', () => {
        cy.visit('http://localhost:3000/signin');
        cy.get('[data-test="signin-password"]').type("1245");
        cy.contains('Username is required').should('be.visible');
    });
    it('Login should fail with an invalid password or an invalid username', () => {
        cy.visit('http://localhost:3000/signin');
        cy.get('[data-test="signin-username"]').type("Maria");
        cy.get('[data-test="signin-password"]').type("1258");
        cy.get('[data-test="signin-remember-me"]').click();
        cy.get('[data-test="signin-submit"]').click();
        cy.contains('Username or password is invalid').should('be.visible');
    });
});