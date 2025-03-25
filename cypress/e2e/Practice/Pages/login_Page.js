export class LoginPage {

    LoginPage_textbox_username = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    LoginPage_textbox_password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    LoginPage_loginButton = ".oxd-button"

    enterUsername(username) {
        cy.get(this.LoginPage_textbox_username).type(username)
    }

    enterPassword(password) {
        cy.get(this.LoginPage_textbox_password).type(password)
    }

    clickloginButton() {
        cy.get(this.LoginPage_loginButton).click()
    }
}