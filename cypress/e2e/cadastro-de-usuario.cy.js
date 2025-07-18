describe('Cadastro Trilha do Conhecimento', () => {

  const Chance = require('chance');

  const chance = new Chance();
  const selectorsList = {
    loginButton: "[href='/login']",
    createUserLink: ".text-link span",
    nameField: "[formcontrolname='name']",
    emailField: "[formcontrolname='email']",
    birthDateField: "[formcontrolname='birthDate']",
    passwordField: "[formcontrolname='password']",
    confirmPasswordField: "[formcontrolname='confirmPassword']",
    keyWordField: "[formcontrolname='keyWord']",
    submitButton: "[type='submit']",
    errorMessage: ".error-message",
    popUp: "[role='dialog']",
    acessarTrilha: ".cancel",
    telaMinhasTrilhas: ".first_div",
  }

  it.skip('001 Cadastro de usuário corretamente', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.createUserLink).click()
    cy.get(selectorsList.nameField).type('Maria Joy')
    cy.get(selectorsList.emailField).type(chance.email())
    cy.get(selectorsList.birthDateField).type('08/08/2000')
    cy.get(selectorsList.passwordField).type('Test123*')
    cy.get(selectorsList.confirmPasswordField).type('Test123*')
    cy.get(selectorsList.keyWordField).type('qualidade')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.popUp).contains('sucesso')
    cy.get(selectorsList.acessarTrilha).click()
    // cy.get(selectorsList.telaMinhasTrilhas)
  })

  it('002 Cadastro de usuário menor de idade', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.createUserLink).click()
    cy.get(selectorsList.nameField).type(chance.name({ middle: true }))
    cy.get(selectorsList.emailField).type(chance.email())
    cy.get(selectorsList.birthDateField).type('08/08/2015')
    cy.get(selectorsList.passwordField).type('Test123*')
    cy.get(selectorsList.confirmPasswordField).type('Test123*')
    cy.get(selectorsList.keyWordField).type('qualidade')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorMessage)
    cy.get(selectorsList.popUp)
    // Alerta de erro deve aparecer pois usuário é menor de idade (18 anos)

  })

  it.skip('003 Cadastro de usuário com email já cadastrado', () => {
    cy.visit('/')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.createUserLink).click()
    cy.get(selectorsList.nameField).type('Maria Test')
    cy.get(selectorsList.emailField).type('maria3@test.com')
    cy.get(selectorsList.birthDateField).type('08/08/2001')
    cy.get(selectorsList.passwordField).type('Test123*')
    cy.get(selectorsList.confirmPasswordField).type('Test123*')
    cy.get(selectorsList.keyWordField).type('qualidade')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.popUp)
    // Alerta de erro deve aparecer informando que o e-mail informado já foi cadastrado

  })
})