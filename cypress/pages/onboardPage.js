
class OnboardingPage {
selectors = {
    dialog: '[data-test="user-onboarding-dialog"]',
    title: 'Get Started with Real World App',
    nextBtn: '[data-test="user-onboarding-next"]',
    bankName: '[data-test="bankaccount-bankName-input"]',
    routing:  '[data-test="bankaccount-routingNumber-input"]',
    account:  '[data-test="bankaccount-accountNumber-input"]',
    submitBank: '[data-test="bankaccount-submit"][tabindex="0"]',
};

isOpen$body($body) {
    return $body.find(this.selectors.dialog).length > 0;
}

assertTitleVisible() {
    cy.contains(this.selectors.title).should('be.visible');
}

clickNext() {
    cy.get(this.selectors.nextBtn).click();
}

fillBankForm({ bankName, routing, account }) {
    cy.get(this.selectors.bankName).clear();
    cy.get(this.selectors.bankName).type(bankName);

    cy.get(this.selectors.routing).clear();
    cy.get(this.selectors.routing).type(routing);

    cy.get(this.selectors.account).clear();
    cy.get(this.selectors.account).type(account);

    cy.get(this.selectors.submitBank).click();
}

maybeComplete({ bankName, routing, account }) {
    cy.get('body').then(($body) => {
    if (this.isOpen$body($body)) {
        this.assertTitleVisible();
        this.clickNext();
        this.fillBankForm({ bankName, routing, account });
        this.clickNext();
    }
    });
}
}

export default OnboardingPage;
