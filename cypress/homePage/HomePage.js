class HomePage
{

    visitURL(){
        return cy.visit("https://rahulshettyacademy.com/angularpractice/")
    }
    getName(){
       return cy.get(':nth-child(1) > .form-control')
    }


    genderSelect(){
      return cy.get('select')
    }

    getEnterprenur(){
       return cy.get('#inlineRadio3')
    }
    getShop(){
       return cy.get(':nth-child(2) > .nav-link')
    }
    twoWayBindingExample(){
       return cy.get(':nth-child(4) > .ng-untouched')
    }
}

export default HomePage