describe('Login with valid credentials', () => {
    it('should navigate to the login page', () => {
        cy.visit('http://localhost:3000/signin'); 
    });
    
});