// <reference types="Cypress"/>
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
        })

    })