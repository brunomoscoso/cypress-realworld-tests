describe('Send money with sufficient balance', () => {
    beforeEach(() => {
            cy.fixture('user').then((user) => {
            cy.loginUI(user.userName, user.password);
          //  cy.get('[data-test="user-onboarding-next"]').click();
          //  cy.get('[data-test="bankaccount-bankName-input"]').type("Banco Teste");
           // cy.get('[data-test="bankaccount-routingNumber-input"]').type("123456687");
           // cy.get('[data-test="bankaccount-accountNumber-input"]').type("120255669885");
           // cy.get('[data-test="bankaccount-submit"]').click();
          //  cy.get('[data-test="user-onboarding-next"]').click();
            cy.contains(`@${ user.userName }`).should('be.visible');
        });
    });
    
    it('Should send money successfully', () => {
        cy.get('[data-test="nav-top-new-transaction"]').click();
        cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
        cy.get('[data-test="transaction-create-amount-input"]').type('10');
        cy.get('[data-test="transaction-create-description-input"]').type('Money');
        cy.get('[data-test="transaction-create-submit-payment"]').click();
        cy.contains('Transaction Submitted!').should('be.visible');
    });
});