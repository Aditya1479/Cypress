before(function(){
    cy.fixture('example.json').as('test_data')
})
it("read files using function", function(){
    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.productName)
    })
    cy.log(this.test_data.name)

})


it("Read file using function",function(){

    cy.readFile('./cypress/fixtures/example.json').then((read)=>{
        cy.log(read.name)
    })
})

it("write file function", function(){
    cy.writeFile('WriteFile.txt', 'Hello I am Raghav')
})