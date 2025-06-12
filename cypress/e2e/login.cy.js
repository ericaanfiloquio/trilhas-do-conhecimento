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
  }

  it('001 Login com dados cadastrados', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get("[name='email']").type('maria3@test.com')
    cy.get("[name='password']").type('Test123*')
    cy.get(selectorsList.submitButton).click()
    cy.get("app-career-overview") // confirmar que usuário foi direcionado para a tela inicial de Trilhas de conhecimentos
    
  })
})