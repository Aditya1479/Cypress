///  <reference types="Cypress"/>

describe('Element Click Test', function(){

it('Tab Element handling ', function() {
cy.visit(Cypress.env('url')+"/AutomationPractice/")
cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin('https://www.qaclickacademy.com/', () => {
    cy.url().should('include', 'qaclickacademy')
  })
///navigate method is not working throwing Blocked a frame with origin "https://rahulshettyacademy.com" from accessing a cross-origin frame.
///cy.go('back')


})
})