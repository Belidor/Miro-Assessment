/// <reference types="cypress" />
// @ts-check

//import user from '../fixtures/user.json';
import signUpPage from '../support/selectors/signUpPage'
import {
  succsessfulUser,
  userWithLongPassword,
  userWithShortPassword
} from '../fixtures/user'

describe('Email sign up tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  afterEach(() => {

  })

  it('Successful login with email', () => {
    cy.fillLoginFields(succsessfulUser);
    cy.checkSignUpCheckboxes();
    cy.pressButton(signUpPage.signUpButton);
  })

  it('Error if password is to long', () => {
    cy.fillLoginFields(userWithLongPassword)
    cy.checkSignUpCheckboxes()
    cy.pressButton(signUpPage.signUpButton)
    cy.get('#passwordError').should('be.visible')
    cy.get('#passwordError').should('have.text', 'Sorry, your password cannot exceed 60 characters')
  })
  
  it('Error if email alreadyin use', () => {
    cy.fillLoginFields(userWithLongPassword)
    cy.checkSignUpCheckboxes()
    cy.pressButton(signUpPage.signUpButton)
    cy.get('#emailError').should('be.visible')
    cy.get('#emailError').should('have.text', 'Sorry, this email is already registered')
  })

  it('Illegal сharacters in username')
});
