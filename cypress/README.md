## Cenários de teste

Feature: Login

Pré-condições: usuário tem acesso a página da aplicação: https://trilha-de-conhecimento.netlify.app/; e possui seus dados cadastrado no sistema.

Ambiente: Ambiente de Dev

Critérios: O preenchimento de todos os campos é obrigatório
 - Dado que tenho acesso a aplicação, eu como usuário consigo logar com minhas credenciais para então ter acesso as trilhas de conhecimento.

| ID | Caso de teste | Passos | Resultados esperado | Status | Report |
|---|-------|-------|-------|-------|-------|
| C001 | Cenário positivo -  | - ;<br>-  | . | Passou | x |
| C002 | x | - x;<br>-  | x | Passou | x |
| C003 | x | - x;<br>- | . | Passou | x |

-----------------------------------------------------------

Feature: Cadastro de usuário

Pré-condições: usuário tem acesso a página da aplicação: https://trilha-de-conhecimento.netlify.app/

Ambiente: Ambiente de Dev

Critérios: O preenchimentos de todos os campos é obrigatório
 - Dado que tenho acesso a aplicação, eu como usuário consigo me cadastrar no site para então ter acesso as trilhas de conhecimento.

| ID | Caso de teste | Passos | Resultados esperado | Status | Report |
|---|-------|-------|-------|-------|-------|
| C001 | Cenário positivo - Cadastrar usuário preenchendo todos os campos obrigatórios corretamente | - Usuário clica no botão de Login;<br>- Clica no link "Ainda não tem uma conta? Crie aqui", que o leva para a tela de Cadastro.<br>- Preenche todos os campos corretamente: nome completo, email existente, data de nascimento maior de 18 anos, cria uma senha, confirma a senha, escolhe frase ou palavra preferida<br>- Clica no botão de submit/cadastrar | Usuário recebe uma mensagem de confirmação de cadastro, informando que receberá um e-mail de confirmação. | Passou | |
| C002 | Cadastro de usuário menor de idade | - Usuário clica no botão de Login;<br>- Clica no link "Ainda não tem uma conta? Crie aqui", que o leva para a tela de Cadastro.<br>- Preenche todos os campos corretamente: nome completo, email existente, data de nascimento menor de 18 anos, cria uma senha, confirma a senha, escolhe frase ou palavra preferida<br>- Clica no botão de submit/cadastrar | Usuário recebe uma mensagem de erro informando que o usuário deve ter mais de 18 anos, ou informando que o campo "data de nascimento" está incorreto. Não deve deixar o usuário seguir em frente. | Passou | Mensagem de erro aparece abaixo do campo preenchido incorretamente no momento do preenchimento, o que facilita para o usuário identificar o que está fazendo errado antes mesmo de seguir para o próximo campo |
| C003 | Cadastro de usuário com email já cadastrado | - Usuário clica no botão de Login;<br>- Clica no link "Ainda não tem uma conta? Crie aqui", que o leva para a tela de Cadastro.<br>- Preenche todos os campos corretamente: nome completo, preenche um email já cadastrado, data de nascimento, cria uma senha, confirma a senha, escolhe frase ou palavra preferida<br>- Clica no botão de submit/cadastrar | Usuário recebe uma mensagem de erro informando que o e-mail informado já tem cadastro e portanto não pode ser concluído o cadastro deste usuário. | Passou | Pop-up alerta de erro aparece |
