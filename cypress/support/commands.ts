/// <reference types='cypress' />
// @ts-check

import signUpPage from '../support/selectors/signUpPage';

Cypress.Commands.add('fillLoginFields', (user: any) => {
  if(user.name) {
    cy.get(signUpPage.nameField).type(user.name);
  }
  if(user.email) {
    cy.get(signUpPage.emailField).type(user.email);
  }
  if(user.password) {
    cy.get(signUpPage.passwordField).type(user.password);
  }
});
Cypress.Commands.add('checkSignUpCheckboxes', (terms: boolean, news: boolean) => {
  if(terms) {
    cy.get(signUpPage.termsAndPolicyCheckbox).click();
  }
  if(news) {
    cy.get(signUpPage.newsletterChackbox).click();
  }
});
Cypress.Commands.add('pressButton', (selector: any) => {
  cy.get(selector).click();
});
