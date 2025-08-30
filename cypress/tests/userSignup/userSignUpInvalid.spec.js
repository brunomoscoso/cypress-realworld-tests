
describe('Failed new user registration', () => {
    it('Should not register a new user with an invalid password.', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('[name="firstName"]').type("Maria");
        cy.get('[name="lastName"]').type("Maria");
        cy.get('[name="username"]').type("Manoela145");
        cy.get('[name="password"]').type("125");
        cy.get('[name="confirmPassword"]').type("125");
        cy.contains('Password must contain at least 4 characters').should('be.visible');
    });
    it('Should not register a new user with an invalid Confirm password.', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('[name="firstName"]').type("Maria");
        cy.get('[name="lastName"]').type("Maria");
        cy.get('[name="username"]').type("Manoela145");
        cy.get('[name="password"]').type("1256");
        cy.get('[name="confirmPassword"]').type("125");
        cy.contains('Password does not match').should('be.visible');
    });
});