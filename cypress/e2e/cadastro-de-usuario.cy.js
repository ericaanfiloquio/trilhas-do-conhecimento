describe('Testes Trilha do Conhecimento', () => {
  it('Cadastro de usuário', () => {
    cy.visit('/')
    cy.get("[href='/login']").click()
    cy.get(".text-link span").click()
    cy.get("[formcontrolname='name']").type('Maria Test')
    cy.get("[formcontrolname='email']").type('maria2@test.com')
    cy.get("[formcontrolname='birthDate']").type('08/08/2000')
    cy.get("[formcontrolname='password']").type('Test123*')
    cy.get("[formcontrolname='confirmPassword']").type('Test123*')
    cy.get("[formcontrolname='keyWord']").type('qualidade')
    cy.get("[type='submit']").click()
    // Acessar a trilha
    
  })
})