/// <reference types='cypress' />
// @ts-check

import signUpPage from '../support/selectors/signUpPage';

Cypress.Commands.add('fillLoginFields', (user: any) => {
  cy.get(signUpPage.nameField).type(user.name);
  cy.get(signUpPage.emailField).type(user.email);
  cy.get(signUpPage.passwordField).type(user.password);
});
Cypress.Commands.add('checkSignUpCheckboxes', () => {
  cy.get(signUpPage.termsAndPolicyCheckbox).click();
  cy.get(signUpPage.newsletterChackbox).click();
});
Cypress.Commands.add('pressButton', (selector: any) => {
  cy.get(selector).click();
});
