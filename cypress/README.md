## Cenários de teste

Feature: Cadastro de usuário
Pré-condições: usuário tem acesso a página da aplicação: https://trilha-de-conhecimento.netlify.app/
Ambiente: Ambiente de Dev
Critérios: O preenchimentos de todos os campos é obrigatório

| Caso de teste | Passos | Resultados esperado | Status | Report |
|-------|-------|-------|-------|-------|
| Cadastrar usuário preenchendo todos os campos obrigatórios | Usuário clica no botão de Login;<br>Clica no botão "Crie aqui", que o leva para a tela de Cadastro.<br>Preenche todos os campos corretamente com nome completo, email existente, data de nascimento, cria uma senha;<br>Clica no botão de submit | Usuário recebe uma mensagem de confirmação de cadastro, informando que receberá um e-mail de confirmação. | Passou | |
