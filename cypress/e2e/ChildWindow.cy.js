///<reference types="Cypress"/>

describe('Child element test suite ', function()
{

it("child Window  Test case ", function()
{

cy.visit(Cypress.env('url')+'AutomationPractice/')
 cy.get('#openwindow').invoke('removeAttr','target').click().then(function(e1)
 {
    //Prop method is used to use the to provide the attibute value
    const url=e1.prop('href')
    let childUrl="https://www.qaclickacademy.com/"
    if (url == childUrl) {
      cy.visit(url);
    } else {
      cy.log('URL is not found or is empty');
    }
 })

})
})