import TransactionHistoryPage from "../../pages/userTransaction";   

const transactionHistoryPage = new TransactionHistoryPage();

describe('Successfully view transaction history', () => {
    before('It should display a users transaction history correctly', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });
    });    
    it('should navigate to transaction history page', () => {
        transactionHistoryPage.viewTransactionHistory();    
    });
});
    
describe('Try to view the transaction history without previous transactions', () => {
    before('It should display a users transaction history correctly', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });
    });  
    it('Should display a message indicating that the user has no previous transactions', () => {
    transactionHistoryPage.viewWithoutTransactions();
    cy.contains('No Transactions').should('be.visible');
    });
});
    