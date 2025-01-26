///<reference types="Cypress"/>

describe('My First Test suite', function()
{
it('My first test case', function() { 
///First Test case body
cy.visit(Cypress.env('url')+ "seleniumPractise/#/")
cy.get('.search-keyword').type("ca")
cy.wait(2000)


///should method is used for Assertion
cy.get('.products-wrapper .product:visible').should('have.length',4)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)


///Parent-child chaining and log will print in console option
cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

// cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
// {
//     console.log('sf') 
// }
// )

//Clicking on ADD TO CART button of specific element
cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
    const vegTextName=$e1.find('h4.product-name').text()
    if(vegTextName.includes('Capsicum'))
        {
            $e1.find('button').click()  
    }
})
// const pagetext= cy.get('.brand')
// cy.log(pagetext.text());

//Assert if logoname is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this log will be print in cypress runner
cy.get('.brand').then(function(logotext)
 {

     cy.log(logotext.text())
 })

 cy.get('.cart-icon > img').click()

})
  

} )