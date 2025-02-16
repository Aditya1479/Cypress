import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor/steps";
const homePage= new HomePage()
const productPage= new ProductPage()
const shoppage= new ShopPage() 

Given('I Open Ecommerce Page', function(){


     cy.visit(Cypress.env('url')+"angularpractice/")
})

When('I Add item to cart', ()=>{

    homePage.getShop().click()

    /////custome method created to use for clicking on single element
   //  cy.SelectProduct('Blackberry')
   //  cy.SelectProduct('Nokia Edge')

   ///New array created in example.json and used custome method to click on each element
    this.data.productName.forEach(element => {
       cy.SelectProduct(element)
    });
   

    productPage.checkoutButton().click()



    //And Validate total prices
    And('Validate total prices',()=>{
        
            const pricevalue=$e1.text()
           var result= pricevalue.split(" ")
           result=result[1].trim()
           
           sum=Number(sum)+Number(result)
          

         }).then(function(){
            cy.log(sum)
         })
        cy.get('h3 strong').then(function(element){

            const TotalAmout=element.text()
            var result= TotalAmout.split(" ")
           var Total=result[1].trim()
           expect(Number(Total)).to.equal(sum)

        })

        //Then Select the country submit and verfiy Thank you

        Then('Select the country submit and verfiy Thank you',()=>{
            shoppage.checkoutclick().click()
             shoppage.SelectCountry().type('India')
             cy.wait(8000)
             shoppage.clickOnSelcted()

             cy.get('#checkbox2').click({force: true}) 
             cy.get('.ng-untouched > .btn').click()
             //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
             cy.get('.alert').then(function(element)
             {
                const actualText=element.text()
                expect(actualText.includes("Success")).to.be.true

             }) 
            
             cy.log("All tests executed")

            

        })

})