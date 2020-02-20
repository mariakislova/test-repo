class HomePage {

    get homeTab() {
        return cy.get('#Home', {timeout: `${Cypress.pageLoadTimeout}`})
    }

    confirmHomeTabIsDisplayed() {
        this.homeTab.should('be.visible')
    }

}

export default new HomePage()