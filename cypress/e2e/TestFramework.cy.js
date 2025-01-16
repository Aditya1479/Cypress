/// <reference types="Cypress"/>
import HomePage from "../homePage/HomePage"
import  ProductPage from "../productPage/ProductPage"

describe("Framework suit ", function()
    {   
        before(function(){
            cy.fixture('example').then(function(data)
            {
                this.data=data
                 
            })
            
        })
        it("My First Test Case ", function() {

            const homePage= new HomePage()
            const productPage= new ProductPage()
            homePage.visitURL()
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
            
             productPage.checkout().click()

             cy.log("All tests executed")

            

        })

    })