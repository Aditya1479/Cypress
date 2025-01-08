///<reference types="Cypress"/>

describe('Child element test suite ', function()
{

it("childe Window  Test case ", function()
{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 cy.get('#openwindow').then(function(e1)
 {
    //Prop method is used to use the to provide the attibute value
    const url=e1.prop('href')
    cy.log(url);
    cy.visit(url)
 })

})
})