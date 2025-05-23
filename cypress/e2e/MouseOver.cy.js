///<reference types="Cypress"/>

describe('Basic mouse over test suite ', function()
{

it("Mouse over Test case ", function()
{

    cy.visit(Cypress.env('url')+"/AutomationPractice/")
cy.get('div.mouse-hover-content').invoke('show')

cy.contains('Top').click()
cy.url().should('include', 'top')

//clicking on hide element from DOM directly
cy.contains('Reload').click({force:true})
cy.url().should('include','AutomationPractice')

})
})