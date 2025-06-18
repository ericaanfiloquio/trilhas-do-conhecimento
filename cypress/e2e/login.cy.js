describe('Login Trilha do Conhecimento', () => {

  const Chance = require('chance');

  const chance = new Chance();
  const selectorsList = {
    loginButton: "[routerlink='/login']",
    createUserLink: ".text-link span",
    nameField: "[formcontrolname='name']",
    emailField: "[formcontrolname='email']",
    birthDateField: "[formcontrolname='birthDate']",
    passwordField: "[formcontrolname='password']",
    confirmPasswordField: "[formcontrolname='confirmPassword']",
    keyWordField: "[formcontrolname='keyWord']",
    submitButton: "[type='submit']",
    errorMessage: ".error-message",
    errorPopUp: "[role='dialog']",
    acessarTrilha: ".cancel",
  }

  it('001 Cadastro + Login com dados cadastrados', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.createUserLink).click()
    cy.get(selectorsList.nameField).type('Oli Test')
    cy.get(selectorsList.emailField).type(chance.email())
    cy.get(selectorsList.birthDateField).type('08/08/2001')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.confirmPasswordField).type('test123')
    cy.get(selectorsList.keyWordField).type('qualidade')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.acessarTrilha, { timeout: 10000 }) // espera até 10s se precisar
      .should('be.visible')
      .click()
    
    
  })
})