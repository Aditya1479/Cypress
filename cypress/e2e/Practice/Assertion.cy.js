it("assertion demo ", ()=>{

    cy.visit('https://example.cypress.io')
    //cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.enabled')
        .and('be.visible')
        expect(true).to.be.true
        assert.equal(4,4,'Equal values')
})