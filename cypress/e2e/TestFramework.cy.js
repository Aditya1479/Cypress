/// <reference types="Cypress"/>
import HomePage from "../homePage/HomePage"
import ProductPage from "../productPage/ProductPage"
import ShopPage from "../shopPage/ShopPage"


describe("Framework suit ", function()
    {   
        before(function(){
            cy.fixture('example').then(function(data)
            {
                this.data=data
                 
            })
            
        })
        it("My First TestCase FrameWork ", function() {
            
            const homePage= new HomePage()
            const productPage= new ProductPage()
            const shoppage= new ShopPage()
            
            cy.visit(Cypress.env('url')+"angularpractice/")
            homePage.getName().type(this.data.name)
            homePage.genderSelect().select(this.data.gender)
             //Assertion
             homePage.twoWayBindingExample().should('have.value',this.data.name)
             homePage.getName().should('have.attr','minlength','2')
             homePage.getEnterprenur().should('be.disabled')
             
             homePage.getShop().click()

             /////custome method created to use for clicking on single element
            //  cy.SelectProduct('Blackberry')
            //  cy.SelectProduct('Nokia Edge')

            ///New array created in example.json and used custome method to click on each element
             this.data.productName.forEach(element => {
                cy.SelectProduct(element)
             });
            

             productPage.checkoutButton().click()
             var sum=0
             cy.get('tr td:nth-child(4) strong').each(($e1,indexe,$list) =>
                {
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