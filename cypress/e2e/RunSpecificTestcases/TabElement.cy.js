///  <reference types="Cypress"/>

describe('Tab Element Click Test', function(){

it('Tab Element handling ', function() {
    cy.visit(Cypress.env('url')+ "AutomationPractice/")
cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin('https://www.qaclickacademy.com', () => {

    cy.get('.navbar-nav > :nth-child(2) > a').click()
})

})
})