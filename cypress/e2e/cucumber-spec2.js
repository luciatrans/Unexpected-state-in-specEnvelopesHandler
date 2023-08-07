import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I am cucumber-spec2', () => cy.log('I am cucumber-spec2 ==> SUCCESS'))

When('I run cucumber-spec2', () => cy.log('I run cucumber-spec2 ==> SUCCESS'))

Then('cucumber-spec2 finishes with success', () => cy.log('cucumber-spec2 finishes with success ==> SUCCESS'))

