describe('Send money with sufficient balance', () => {
    beforeEach(() => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });

        cy.get('body').then(($body) => {
        if ($body.find('[data-test="user-onboarding-dialog"]').length > 0) {
        cy.contains('Get Started with Real World App').should('be.visible');
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('[data-test="bankaccount-bankName-input"]').type('BankNew');
        cy.get('[data-test="bankaccount-routingNumber-input"]').type('123456789');
        cy.get('[data-test="bankaccount-accountNumber-input"]').type('123456789');
        cy.get('[data-test="bankaccount-submit"][tabindex="0"]').click();
        cy.get('[data-test="user-onboarding-next"]').click();
        }
        });
    });
    it('Should send money successfully', () => {
        cy.get('[data-test="sidenav-user-balance"]')
            .invoke('text')
            .then((value) => {
                const number = parseFloat(value.replace('$', '').trim());
                expect(number).to.be.greaterThan(0);
            });
        cy.get('[data-test="nav-top-new-transaction"]').click();
        cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
        cy.get('[data-test="transaction-create-amount-input"]').type('10');
        cy.get('[data-test="transaction-create-description-input"]').type('Money');
        cy.get('[data-test="transaction-create-submit-payment"]').click();
        cy.contains('Transaction Submitted!').should('be.visible');
    });

    it('An error message should be displayed when sending money without sufficient balance.', () => {
        cy.get('[data-test="sidenav-user-balance"]')
            .invoke('text')
            .then((value) => {
                const number = parseFloat(value.replace('$', '').trim());
                expect(number).to.be.eq(0);
            });
        cy.get('[data-test="nav-top-new-transaction"]').click();
        
        cy.get('body').then(($body) => {
        if ($body.find('[data-test="user-onboarding-dialog"]').length > 0) {
        cy.contains('Get Started with Real World App').should('be.visible');
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('[data-test="bankaccount-bankName-input"]').type('BankNew');
        cy.get('[data-test="bankaccount-routingNumber-input"]').type('123456789');
        cy.get('[data-test="bankaccount-accountNumber-input"]').type('123456789');
        cy.get('[data-test="bankaccount-submit"][tabindex="0"]').click();
        cy.get('[data-test="user-onboarding-next"]').click();
        }
        });
        cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
        cy.get('[data-test="transaction-create-amount-input"]').type('10');
        cy.get('[data-test="transaction-create-description-input"]').type('Money');
        cy.get('[data-test="transaction-create-submit-payment"]').click();
        cy.contains('Error').should('be.visible');
    });
});