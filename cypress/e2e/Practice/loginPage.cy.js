import { LoginPage } from "./Pages/login_Page"
const loginpage = new LoginPage()

describe('Practic login page for OrangeHRM', () => {

    beforeEach(function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Login Test 1", () => {
        
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.clickloginButton()
        cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard')
    })

    it("Login Test 2 with Invalid Credentials", () => {
        loginpage.enterUsername('Admin1')
        loginpage.enterPassword('admin123')
        loginpage.clickloginButton()
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })
})