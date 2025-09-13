class TransactionHistoryPage {
selectors = {
    personalTab: '[data-test="nav-personal-tab"]',
    listItems: '.MuiListItem-alignItemsFlexStart',
};

goToPersonalTab() {
    cy.get(this.selectors.personalTab).click();
}

assertHasTransactions() {
    cy.get(this.selectors.listItems)
    .should('have.length.greaterThan', 0)
    .and('be.visible');
}

viewTransactionHistory() {
    this.goToPersonalTab();
    this.assertHasTransactions();

}

viewWithoutTransactions() {
    this.goToPersonalTab();
}
}
export default TransactionHistoryPage;
