///  <reference types="Cypress"/>

describe('Checkbox Element Click Test', function(){

it('checkbox test cases ', function() {
cy.visit(Cypress.env('url')+'AutomationPractice/')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//to uncheck() the checkbox
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//selecting multiple checkbox options
cy.get('input[type="checkbox"]').check(['option2','option3'])

})
})