/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
it('My first test case', function() {
///second Test case body
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type("ca")
cy.wait(2000)
cy.get('.products').as('productLocator')

///Parent-child chaining and log will print in console option
cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
    const vegTextName=$e1.find('h4.product-name').text()
    if(vegTextName.includes('Capsicum'))
        {
            $e1.find('button').click()  
    }
})
 cy.get('.cart-icon > img').click()
 cy.contains('PROCEED TO CHECKOUT').click()
 cy.contains('Place Order').click()
 //cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
 cy.get('select').select('India').should('have.value','India')
 cy.get('.chkAgree').check()
 cy.get('button').click()

})
  

} )