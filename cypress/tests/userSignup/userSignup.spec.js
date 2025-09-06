import { generateUserData } from '../../support/dataGenerator';
import UserSignUp from '../../pages/userSignUp';

const user = generateUserData();
const userSignUp = new UserSignUp();

describe('Successful new user registration', () => {
    it('Should register a new user with valid information', () => {
        cy.writeFile('cypress/fixtures/user.json', user);

        userSignUp.acessSignUpPage();
        userSignUp.fillSignUpForm(user);
        userSignUp.submit();
        cy.contains('Sign in').should('be.visible');
    });
});

describe('Test user registration with incomplete data', () => {
        it('Should not register a new user with an invalid password.', () => {

        userSignUp.acessSignUpPage();
        userSignUp.fillSignUpForm(user, { password: '123', confirmPassword: '123' });
        cy.contains('Password must contain at least 4 characters').should('be.visible');
    });
    it('Should not register a new user with an invalid Confirm password.', () => {
        userSignUp.acessSignUpPage();
        userSignUp.fillSignUpForm(user, { password: '12345', confirmPassword: '12' });
        cy.contains('Password does not match').should('be.visible');
    });
});