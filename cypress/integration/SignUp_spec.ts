/// <reference types="cypress" />
// @ts-check

import signUpPage from '../support/selectors/signUpPage';
import {
  succsessfulUser,
  userWithLongPassword,
  userWithShortPassword,
  userWithExistingEmail,
  userWithInvalidEmail,
  userWithoutName
} from '../fixtures/user';

describe('Email sign up tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  afterEach(() => {});

  it('Successful login with email', () => {
    cy.fillLoginFields(succsessfulUser);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('.signup__title-form').should('be.visible');
    cy.get('.signup__subtitle-form').should('contain.text', succsessfulUser.email);
  });

  it('Error if password is to long', () => {
    cy.fillLoginFields(userWithLongPassword);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#passwordError').should('be.visible');
    cy.get('#passwordError').should('have.text', 'Sorry, your password cannot exceed 60 characters');
  });

  it('Error if password is to short', () => {
    cy.fillLoginFields(userWithShortPassword);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#password-hint > #signup-form-password').should('be.visible');
    cy.get('#password-hint > #signup-form-password').should(
      'have.text',
      'Please use 8+ characters for secure password.'
    );
  });

  it('Error if email alreadyin use', () => {
    cy.fillLoginFields(userWithExistingEmail);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#emailError').should('be.visible');
    cy.get('#emailError').should('have.text', 'Sorry, this email is already registered');
  });

  it('Email field validation', () => {
    cy.fillLoginFields(userWithInvalidEmail);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#emailError').should('be.visible');
    cy.get('#emailError').should('have.text', 'Enter a valid email address.');
  });

  it('Name field validation', () => {
    cy.fillLoginFields(userWithoutName);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
    cy.get('#nameError').should('be.visible');
    cy.get('#nameError').should('have.text', 'Please enter your name.');
  });
});
