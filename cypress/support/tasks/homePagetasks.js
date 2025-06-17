import { HomePageObjects } from "../homePageObjects/homePageObjects";

export function fillform(){
        cy.get (HomePageObjects.Name).type("aditya");      
}

export function genderSelect(){
    cy.get(HomePageObjects.gender).select("Male"); 
}

export function clickOnShopButton(){
    cy.get(HomePageObjects.shopbutton).contains('Shop').click()
}