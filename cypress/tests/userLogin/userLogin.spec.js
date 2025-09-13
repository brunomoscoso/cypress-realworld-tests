import UserLogin from "../../pages/userLogin";

const userLogin = new UserLogin();

describe('Successful new user login', () => {
    it('Should log in a new user with valid information', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        cy.contains('Get Started with Real World App').should('be.visible');
    });
    });
    
});

describe('Test login functionality with invalid credentials', () => {
    it('Login should fail with an empty username.', () => {
        userLogin.acesLoginPage();
        userLogin.loginEmptyUsername('1234')
        cy.contains('Username is required').should('be.visible');
    });
    it('Login should fail with an invalid password or an invalid username', () => {
        userLogin.acesLoginPage();
        userLogin.loginInvalidCredentials('Maria', '1225');
        cy.contains('Username or password is invalid').should('be.visible');
    });
});