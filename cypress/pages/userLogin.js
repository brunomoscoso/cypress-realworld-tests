class UserLogin {
    get selectors () {
        return {
        usernameInput: '[data-test="signin-username"]',
        passwordInput: '[data-test="signin-password"]',
        rememberButton: '[data-test="signin-remember-me"]',
        submitButton: '[data-test="signin-submit"]'
        };

    }
    
    acesLoginPage() { cy.visit('/signin'); }

    fillUserName(user) {
        cy.get(this.selectors.usernameInput).type(user);
    };

    fillPassword(password) {
        cy.get(this.selectors.passwordInput).type(password);
    };

    rememberButton(){
        cy.get(this.selectors.rememberButton).click();
    };

    submitButton(){
        cy.get(this.selectors.submitButton).click();
    };

    loginEmptyUsername(password) {
        this.fillPassword(password);
    };

    loginInvalidCredentials(user, password) {
        this.fillUserName(user);
        this.fillPassword(password);
        this.rememberButton();
        this.submitButton();
    }
};

export default UserLogin;