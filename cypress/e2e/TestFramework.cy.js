///<reference types="Cypress"/>
describe("Framework suit ", function()
    {   
        before(function(){
            cy.fixture('example').then(function(data)
            {
                this.data=data
                 
            })
            
        })
        it("My First Test Case ", function() {
            cy.visit("https://rahulshettyacademy.com/angularpractice/")
             cy.get(':nth-child(1) > .form-control').type(this.data.name)
             cy.get('select').select(this.data.gender)
             //Assertion
             cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
             cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
             cy.get('#inlineRadio3').should('be.disabled')
             cy.get(':nth-child(2) > .nav-link').click()

             /////custome method created to use for clicking on single element
            //  cy.SelectProduct('Blackberry')
            //  cy.SelectProduct('Nokia Edge')

            ///New array created in example.json and used custome method to click on each element
             this.data.productName.forEach(element => {
                cy.SelectProduct(element)
             });
             

            

        })

    })