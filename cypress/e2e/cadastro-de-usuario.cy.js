describe('Testes Trilha do Conhecimento', () => {
  it('Cadastro de usuário', () => {
    cy.visit('/')
    cy.get("[href='/login']").click()
  })
})