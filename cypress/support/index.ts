import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
  namespace Cypress {
    interface Chainable {
      fillLoginFields(user: any): Chainable<String>;
      checkSignUpCheckboxes(): Chainable<String>;
      pressButton(selector: any): Chainable<String>;
    }
  }
}
