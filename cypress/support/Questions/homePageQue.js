import { HomePageObjects } from "../homePageObjects/homePageObjects";

export function verifyTwoWayBinding(){
    cy.get(HomePageObjects.TwoWayBinding).should('have.value','aditya');
}


export function isEntrepreneurvalue(){
    cy.get(HomePageObjects.Entrepreneur).should("be.disabled");
}

