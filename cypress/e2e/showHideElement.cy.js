/// <reference types="Cypress"/>

describe('dropdown', function()
{
it('dropdown test case', function() {

    cy.visit(Cypress.env('url')+"AutomationPractice/")
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    
    cy.get('#show-textbox').click()
    cy.get('#show-textbox').should('be.visible')
    cy.get('#displayed-text').click().type(' Type Anything ').should('have.value',' Type Anything ')
})
  

} )