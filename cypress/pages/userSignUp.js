class UserSignUp {
    selectorsList () {
    const selectors = { 
    firstNameInput: 'input[name="firstName"]',
    lastNameInput: 'input[name="lastName"]',
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    confirmPasswordInput: 'input[name="confirmPassword"]',
    signUpButton: '[data-test="signup-submit"]',
    }
    return selectors;
    };

    acessSignUpPage() { cy.visit('/signup'); }

    fillSignUpFields(user) {
    cy.get(this.selectorsList().firstNameInput).type(user.firstName);
    cy.get(this.selectorsList().lastNameInput).type(user.lastName);
    cy.get(this.selectorsList().usernameInput).type(user.userName);
    }

    typePassword({ password, confirmPassword }) {
    cy.get(this.selectorsList().passwordInput).clear();        
    cy.get(this.selectorsList().passwordInput).type(password);
    cy.get(this.selectorsList().confirmPasswordInput).clear(); 
    cy.get(this.selectorsList().confirmPasswordInput).type(confirmPassword);
    }

    submit() { cy.get(this.selectorsList().signUpButton).click(); }

    fillSignUpForm(user, { password, confirmPassword } = {}) {
    const passWord = password ?? user.password;
    const confirmPassWord = confirmPassword ?? user.password;
    this.fillSignUpFields(user);
    this.typePassword({ password: passWord, confirmPassword: confirmPassWord });
    }
}

export default UserSignUp;
