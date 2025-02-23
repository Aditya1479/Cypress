//<reference types="Cypress"/>
///<reference types="Cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe';

describe('Iframe test suite', function() {
  it('Iframe test case', function() {
    cy.visit(Cypress.env('url')+'AutomationPractice/');

    // Wait for the iframe to load
    cy.frameLoaded('#courses-iframe');
    
    // Interact with the iframe's content
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(3000)
    // Assert the content inside the iframe
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);
  });
});
