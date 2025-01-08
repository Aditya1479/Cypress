///  <reference types="Cypress"/>

describe('Element Click Test', function(){

it('Tab Element handling ', function() {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin('https://www.qaclickacademy.com', () => {

    cy.get('.navbar-nav > :nth-child(2) > a').click()
})

})
})