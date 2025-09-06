class UserSignUp {
    selectors = {
    firstNameInput: 'input[name="firstName"]',
    lastNameInput: 'input[name="lastName"]',
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    confirmPasswordInput: 'input[name="confirmPassword"]',
    signUpButton: '[data-test="signup-submit"]',
    };

    acessSignUpPage() { cy.visit('/signup'); }

    fillSignUpFields(user) {
    const selector = this.selectors;
    cy.get(selector.firstNameInput).type(user.firstName);
    cy.get(selector.lastNameInput).type(user.lastName);
    cy.get(selector.usernameInput).type(user.userName);
    }

    typePassword({ password, confirmPassword }) {
    const selector = this.selectors;
    cy.get(selector.passwordInput).clear();        
    cy.get(selector.passwordInput).type(password);
    cy.get(selector.confirmPasswordInput).clear(); 
    cy.get(selector.confirmPasswordInput).type(confirmPassword);
    }

    submit() { cy.get(this.selectors.signUpButton).click(); }

    fillSignUpForm(user, { password, confirmPassword } = {}) {
    const passWord = password ?? user.password;
    const confirmPassWord = confirmPassword ?? user.password;
    this.fillSignUpFields(user);
    this.typePassword({ password: passWord, confirmPassword: confirmPassWord });
    }
}

export default UserSignUp;
