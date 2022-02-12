/// <reference types="cypress" />
// @ts-check

import signUpPage from '../support/selectors/signUpPage';
import * as user from '../fixtures/user';

describe('Email sign up tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  afterEach(() => {});

  it('Successful login with email', () => {
    cy.fillLoginFields(user.succsessfulUser);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('.signup__title-form').should('be.visible');
    cy.get('.signup__subtitle-form').should('contain.text', user.succsessfulUser.email);
  });

  it('Error if password is to long', () => {
    cy.fillLoginFields(user.userWithLongPassword);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#passwordError').should('be.visible');
    cy.get('#passwordError').should('have.text', 'Sorry, your password cannot exceed 60 characters');
  });

  it('Error if password is to short', () => {
    cy.fillLoginFields(user.userWithShortPassword);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#password-hint > #signup-form-password').should('be.visible');
    cy.get('#password-hint > #signup-form-password').should(
      'have.text',
      'Please use 8+ characters for secure password.'
    );
  });

  it('Error if email alreadyin use', () => {
    cy.fillLoginFields(user.userWithExistingEmail);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#emailError').should('be.visible');
    cy.get('#emailError').should('have.text', 'Sorry, this email is already registered');
  });

  it('Email field validation', () => {
    cy.fillLoginFields(user.userWithInvalidEmail);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#emailError').should('be.visible');
    cy.get('#emailError').should('have.text', 'Enter a valid email address.');
  });

  it('Name field validation', () => {
    cy.fillLoginFields(user.userWithoutName);
    cy.checkSignUpCheckboxes(true, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#nameError').should('be.visible');
    cy.get('#nameError').should('have.text', 'Please enter your name.');
  });

  it('Cannot sign up without accepting terms', () => {
    cy.fillLoginFields(user.succsessfulUser);
    cy.checkSignUpCheckboxes(false, true);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#termsError').should('be.visible');
    cy.get('#termsError').should('have.text', 'Please agree with the Terms to sign up.');
  })

  it('Successful login without news subscription', () => {
    cy.fillLoginFields(user.userWithoutNews);
    cy.checkSignUpCheckboxes(true, false);
    cy.pressButton(signUpPage.signUpButton);
    cy.get('.signup__title-form').should('be.visible');
    cy.get('.signup__subtitle-form').should('contain.text', user.userWithoutNews.email);
  });
});
