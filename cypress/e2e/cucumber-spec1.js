import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I am cucumber-spec1', () => cy.log('I am cucumber-spec1 ==> SUCCESS'))

When('I run', () => cy.log('I run ==> SUCCESS'))

Then('I finish with success', () => cy.log('I finish with success ==> SUCCESS'))

