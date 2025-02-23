/// <reference types="Cypress"/>

describe('dropdown', function()
{
it('dropdown test case', function() {

    cy.visit(Cypress.env('url') +'AutomationPractice/')
    cy.get('Select[name="dropdown-class-example"]').select('option2').should('have.value','option2')
})
  

} )