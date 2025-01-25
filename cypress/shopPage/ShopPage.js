class shopPage{


    checkoutclick(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }

    SelectCountry(){
        return cy.get('#country')
    }

    clickOnSelcted(){
        cy.get('.suggestions > ul > li > a').click()
    }

}
export default shopPage