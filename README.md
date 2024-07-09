# Wikipedia Cypress Tests

Este repositório contém testes automatizados para a Wikipedia usando Cypress.

## Como Executar os Testes

### Clone o Repositório

Abra o terminal e execute os seguintes comandos:

```sh
git clone https://github.com/brunaraph/wikipedia_cypress.git
cd wikipedia_cypress
```
### Instale as Dependências
Certifique-se de ter Node.js e npm instalados. Em seguida, instale as dependências necessárias:

```sh
npm install
```

### Instale o Cypress
Caso o Cypress não esteja instalado automaticamente, execute:
```sh
npm install cypress --save-dev
```

### Execute o Cypress
Para abrir a interface do Cypress, use o seguinte comando:
```sh
npx cypress open
```

Ou, para executar os testes no modo headless:

```sh
npx cypress run
