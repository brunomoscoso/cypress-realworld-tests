
import OnboardingPage from '../../pages/onboardPage';
import SendMoneyPage from '../../pages/sendMoney';

const onboarding = new OnboardingPage();
const sendMoney = new SendMoneyPage();

describe('Send money with sufficient balance', () => {
    before(() => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });

    onboarding.maybeComplete({
            bankName: 'BankNew',
            routing: '123456789',
            account: '123456789',
        });
    });
    it('Should send money successfully', () => {

        sendMoney.sendMoneySuccess({ amount: '10', description: 'Money' });
        cy.contains('Transaction Submitted!').should('be.visible');
    });

    
});

describe('Test money transfer with insufficient balance', () => {
    before(() => {
        cy.fixture('user').then((user) => {
        cy.login(user.userName, user.password);
        });

        onboarding.maybeComplete({
            bankName: 'BankNew',
            routing: '123456789',
            account: '123456789',
        });
    });

    it('An error message should be displayed when sending money without sufficient balance.', () => {
        sendMoney.sendMoneyWithoutBalance({ amount: '10', description: 'Money' });
        cy.contains('Error').should('be.visible');
    });
    
});