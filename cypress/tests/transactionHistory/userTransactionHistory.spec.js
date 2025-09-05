
describe('Successfully view transaction history', () => {
    before('It should display a users transaction history correctly', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });
    });    
    it('should navigate to transaction history page', () => {
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.get('.MuiListItem-alignItemsFlexStart')
        .should('have.length.greaterThan', 0)
        .and('be.visible');
    });
});
    
describe('Try to view the transaction history without previous transactions', () => {
    before('It should display a users transaction history correctly', () => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });
    });  
    it('Should display a message indicating that the user has no previous transactions', () => {
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.contains('No Transactions').should('be.visible');
    });
});
    