# QA Automation Cypress

Projeto de portfólio voltado à demonstração de práticas de Quality Assurance e Automação de Testes utilizando Cypress.

O projeto contempla testes E2E de aplicação Web, testes de API, organização com Page Objects, massa de dados em fixtures e execução automatizada através de GitHub Actions.

## Objetivos

Demonstrar na prática conhecimentos em:

- Automação de testes E2E
- Testes de API
- Cypress
- JavaScript
- Page Object Model
- Fixtures
- Assertions
- Boas práticas de organização de testes
- CI/CD
- GitHub Actions
- Evidências automáticas de falha

## Tecnologias

- JavaScript
- Cypress
- Node.js
- Git
- GitHub
- GitHub Actions

## Estrutura do projeto

```text
qa-automation-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── posts.cy.js
│   │   └── web/
│   │       ├── cart.cy.js
│   │       └── login.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

## Cenários automatizados

### Web

- Login com credenciais válidas
- Validação de login inválido
- Validação da página de produtos
- Inclusão de produto no carrinho

### API

- Consulta de recurso via GET
- Validação de status HTTP
- Validação de contrato básico da resposta
- Criação de recurso via POST
- Validação do payload retornado

## Padrão Page Object

Os elementos e ações das páginas são encapsulados em classes dentro de:

```text
cypress/pages/
```

Isso reduz duplicação e facilita manutenção e evolução dos testes.

## Fixtures

As massas de dados utilizadas nos testes ficam em:

```text
cypress/fixtures/
```

Credenciais e demais dados de teste ficam separados da lógica dos cenários.

## Instalação

Clone o projeto:

```bash
git clone https://github.com/VanessaBarbera/qa-automation-cypress.git
```

Entre na pasta:

```bash
cd qa-automation-cypress
```

Instale as dependências:

```bash
npm install
```

## Execução

Abrir a interface do Cypress:

```bash
npm run cy:open
```

Executar todos os testes:

```bash
npm test
```

Executar somente os testes Web:

```bash
npm run test:e2e
```

Executar somente os testes de API:

```bash
npm run test:api
```

## Integração Contínua

O projeto possui pipeline configurada no GitHub Actions.

A execução acontece automaticamente em:

- Push para `main`
- Pull Request para `main`
- Execução manual

A pipeline executa os testes no Chrome e, em caso de falha, publica screenshots e vídeos como evidências.

## Estratégia de Qualidade

Este projeto foi estruturado para demonstrar uma abordagem de automação que prioriza:

- Legibilidade
- Reutilização
- Baixo acoplamento
- Separação entre dados e lógica de teste
- Evidências de execução
- Integração contínua
- Facilidade de manutenção

## Próximas evoluções

- Adicionar testes de checkout
- Implementar comandos customizados
- Adicionar interceptação e mocks com `cy.intercept`
- Incluir validação de schema de API
- Adicionar execução em múltiplos browsers
- Incluir relatório HTML
- Integrar testes com estratégias de qualidade em Pull Requests

## Autora

**Vanessa Barbera**

Quality Assurance | QA Automation | Software Testing
