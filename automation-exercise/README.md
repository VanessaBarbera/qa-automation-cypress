# Automação E2E — Automation Exercise

Projeto de conclusão individual: **10 casos de teste** da aplicação [Automation Exercise](https://automationexercise.com/test_cases).

**Tecnologias:** Cypress + JavaScript, Page Objects, fixtures JSON, API de pré-condições, GitHub Actions, Mochawesome (JSON e HTML).

## Casos cobertos

| Caso | Objetivo | Spec |
|---|---|---|
| TC01 | Cadastro e exclusão | 01-account.cy.js |
| TC02 | Login correto e exclusão | 01-account.cy.js |
| TC03 | Login incorreto | 01-account.cy.js |
| TC04 | Logout | 01-account.cy.js |
| TC05 | Cadastro de e-mail existente | 01-account.cy.js |
| TC08 | Produtos e detalhes | 02-products.cy.js |
| TC09 | Busca de produtos | 02-products.cy.js |
| TC10 | Newsletter | 02-products.cy.js |
| TC15 | Compra com cadastro antes | 03-checkout.cy.js |
| TC16 | Compra com login antes | 03-checkout.cy.js |

## Executar localmente

Requer Node.js 20+ e Google Chrome.

```bash
cd automation-exercise
npm install
npm test
npm run report
```

Para abrir a interface interativa: `npm run cy:open`. Também é possível usar `npm run test:electron`.

O relatório HTML é gerado em `cypress/html-report/index.html`; os JSONs individuais ficam em `cypress/results/`. Capturas de falhas e vídeos são produzidos em `cypress/screenshots/` e `cypress/videos/`.

## Integração contínua

O workflow [automation-exercise.yml](../.github/workflows/automation-exercise.yml) instala dependências, executa os testes no Chrome e publica relatório e evidências nos **Artifacts** da execução. Executa em push para `main` ou a branch do trabalho, pull request e manualmente.

Não afirmar "sem erros" sem verificar a execução real do workflow. Veja a aba Actions deste repositório.

## Estrutura

```text
automation-exercise/
├── cypress.config.js
├── package.json
├── cypress/
│   ├── fixtures/data.json
│   ├── e2e/
│   │   ├── 01-account.cy.js
│   │   ├── 02-products.cy.js
│   │   └── 03-checkout.cy.js
│   ├── pages/
│   │   ├── AuthPage.js
│   │   └── ShopPage.js
│   └── support/
│       ├── accountApi.js
│       ├── e2e.js
│       └── userFactory.js
└── README.md
```

## Estratégia de qualidade

- Cada teste inicia com nova sessão; usuários de teste gerados com e-mail único, sem senhas reais.
- Page Objects para ações reutilizáveis; seletores `data-qa` e IDs preferidos.
- API oficial usada somente para criar pré-condições nos TC02, TC04, TC05 e TC16 e limpar dados após o teste.
- TC01 e TC15 executam cadastro completo na interface; exclusão pela interface conforme cenário.
- Checkout em ambiente fictício com cartão de **teste**, sem qualquer compra real.
- Assertions verificam estados funcionais, não apenas cliques. Uma repetição automática no CI minimiza instabilidade sem esconder falhas finais.
- Não versionar `node_modules`, relatórios ou vídeos.

**Autora:** Vanessa Barbera | QA Automation

**Referências oficiais:** [Test Cases](https://automationexercise.com/test_cases) · [API List](https://automationexercise.com/api_list)
