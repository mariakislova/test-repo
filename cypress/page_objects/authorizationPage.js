class AuthorizationPage {

    open() {
        cy.visit(`${Cypress.env('loginPageURL')}`)
    }

    get loginInput() {
        return cy.get('#username')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get submitButton() {
        return cy.get('.btn').click()
    }

    typeLogin(loginName) {
        this.loginInput.type(loginName)
    }

    typePassword(password) {
        this.passwordInput.type(password)
    }

    authorize(loginName, password) {
        this.typeLogin(loginName)
        this.typePassword(password)
        this.submitButton
    }

}

export default new AuthorizationPage()