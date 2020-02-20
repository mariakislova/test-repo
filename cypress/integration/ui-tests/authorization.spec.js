import AuthorizationPage from "../../page_objects/authorizationPage"
import HomePage from "../../page_objects/homePage"

describe('Authorization Tests', () => {

    const usersDataFolder = 'users'

    beforeEach(() => {
        AuthorizationPage.open()
      })

    it('Positive: Authorization with valid credentials', () => {
        cy.fixture(usersDataFolder).then(userCredentials => {            
            cy.log('When user is authorizaed with valid credentials')
            AuthorizationPage.authorize(userCredentials.login, userCredentials.password)
            cy.log('Home tab is displayed')
            HomePage.confirmHomeTabIsDisplayed()
        })
    })

    it('Positive: Authorization with valid credentials 2', () => {
        cy.fixture(usersDataFolder).then(userCredentials => {            
            cy.log('When user is authorizaed with valid credentials')
            AuthorizationPage.authorize(userCredentials.login, userCredentials.password)
            cy.log('Home tab is displayed')
            HomePage.confirmHomeTabIsDisplayed()
        })
    })
})