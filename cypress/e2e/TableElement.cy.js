/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
it('My first test case', function() {
///First Test case body
cy.visit(Cypress.env('url')+ "AutomationPractice/")

//capturing value in next element to find element using next() method
cy.get('tr td:nth-child(2)').each(($e1,index,$list) => 
{
    const text = $e1.text()
    if(text.includes("Python"))
    {
        // then is resolving the promise and then you can store it to any variable and able to perform action
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
           const pricetext= price.text()
           expect(pricetext).to.equal('25')
        })
    }
})


})
  

} )