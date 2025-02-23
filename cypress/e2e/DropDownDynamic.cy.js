/// <reference types="Cypress"/>

describe('dropdown', function()
{
it('dropdown test case', function() {

    cy.visit(Cypress.env('url') + 'AutomationPractice/')
    cy.get('#autocomplete').type('Ind')
    cy.get('.ui-menu-item div').each(($e1,index,$list) =>{
        if($e1.text()=="India"){
            $e1.click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')
})
  

} )