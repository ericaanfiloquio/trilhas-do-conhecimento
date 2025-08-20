describe('Login Trilha do Conhecimento', () => {

  const selectorsList = {
    loginButton: "[routerlink='/login']",
    emailField: "[name='email']",
    passwordField: "[type='password']",
    submitButton: "[type='submit']",

  }

  it('Login', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.emailField).type('test8@mail.com')
    cy.get(selectorsList.passwordField).type('123456')
    cy.get(selectorsList.submitButton).click()
    cy.get(".second-div__flexbox").eq(0).click()
    cy.get("button").click()
    cy.get(".text_main_menu").eq(0).click()
    cy.get("[target='_blank']").eq(0).click()
      .should('be.visible')
    
  })
})