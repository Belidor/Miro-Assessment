import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
  namespace Cypress {
    interface Chainable {
      fillLoginFields(user: any): Chainable<String>;
      checkSignUpCheckboxes(terms: boolean, news: boolean): Chainable<String>;
      pressButton(selector: any): Chainable<String>;
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
