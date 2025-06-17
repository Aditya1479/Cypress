import {homepage as HomePageObjects} from "../support/homePageObjects/homePageObjects"
import * as homePagetasks from "../support/tasks/homePagetasks"
import * as homePageQue from "../support/Questions/homePageQue"



beforeEach(() =>{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

describe("e2e frame work", function() {
    it("test start", ()=>{
        homePagetasks.fillform();
        homePagetasks.genderSelect();
        homePageQue.verifyTwoWayBinding();
        homePageQue.isEntrepreneurvalue();
        homePagetasks.clickOnShopButton();
    })
})