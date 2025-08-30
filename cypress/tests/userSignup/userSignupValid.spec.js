import { generateUserData } from '../../support/dataGenerator';

describe('Successful new user registration', () => {
    it('Should register a new user with valid information', () => {
        const user = generateUserData();

        cy.writeFile('cypress/fixtures/user.json', user);

        cy.visit('http://localhost:3000/signup');
        cy.get('[name="firstName"]').type(user.firstName);
        cy.get('[name="lastName"]').type(user.lastName);
        cy.get('[name="username"]').type(user.userName);
        cy.get('[name="password"]').type(user.password);
        cy.get('[name="confirmPassword"]').type(user.password);
        cy.get('[data-test="signup-submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/signin')
    });
});