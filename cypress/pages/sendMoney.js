import OnboardingPage from "./onboardPage";

const onboarding = new OnboardingPage();

class SendMoneyPage {
selectors = {
    balance:            '[data-test="sidenav-user-balance"]',
    newTransactionBtn:  '[data-test="nav-top-new-transaction"]',
    userListItem:       '[data-test="user-list-item-uBmeaz5pX"]',
    amountInput:        '[inputmode="numeric"][name="amount"]',
    descriptionInput:   '[data-test="transaction-create-description-input"]',
    submitPaymentBtn:   '[data-test="transaction-create-submit-payment"]',
};

getBalanceNumberGreater() {
    return cy.get(this.selectors.balance)
    .invoke('text')
    .then((value) => {
                const number = parseFloat(value.replace('$', '').trim());
                expect(number).to.be.greaterThan(0);
    });
}

getBalanceNumberEq() {
    return cy.get(this.selectors.balance)
    .invoke('text')
    .then((value) => {
                const number = parseFloat(value.replace('$', '').trim());
                expect(number).to.be.eq(0);
    });
}

openNewTransaction() {
    cy.get(this.selectors.newTransactionBtn).click();
}
userListItem() {
    cy.get(this.selectors.userListItem).click();
}
typeAmount(value) {
    cy.get(this.selectors.amountInput).clear();
    cy.get(this.selectors.amountInput).type(String(value));
}

typeDescription(text) {
    cy.get(this.selectors.descriptionInput).clear();
    cy.get(this.selectors.descriptionInput).type(text);
}

submitPayment() {
    cy.get(this.selectors.submitPaymentBtn).click();
}


sendMoneySuccess({ amount, description }) {
    this.getBalanceNumberGreater();
    this.openNewTransaction();
    this.userListItem();
    this.typeAmount(amount);
    this.typeDescription(description);
    this.submitPayment();   
}


sendMoneyWithoutBalance({ amount, description }) {
    this.getBalanceNumberEq();
    this.openNewTransaction();
    onboarding.maybeComplete({ bankName: 'BankNew', routing: '123456789', account: '123456789' });
    this.userListItem();
    this.typeAmount(amount);
    this.typeDescription(description);
    this.submitPayment();   
}

}
export default SendMoneyPage;
