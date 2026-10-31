const auth = require('../pages/AuthPage');
const shop = require('../pages/ShopPage');
const { makeUser } = require('../support/userFactory');
const { createAccount, deleteAccount } = require('../support/accountApi');
const data = require('../fixtures/data.json');

describe('Automation Exercise | Contas e autenticação', () => {
  let user;
  let needsApiCleanup;

  beforeEach(() => {
    user = null;
    needsApiCleanup = false;
    cy.visit('/');
    shop.assertHome();
  });

  afterEach(() => {
    if (needsApiCleanup && user) deleteAccount(user);
  });

  it('TC01 - cadastra, verifica e remove um usuário', () => {
    user = makeUser();
    auth.open();
    auth.startSignup(user);
    auth.completeSignup(user);
    auth.deleteThroughUi();
  });

  it('TC02 - login válido e exclusão da conta', () => {
    user = makeUser();
    createAccount(user);
    needsApiCleanup = true;
    auth.open();
    auth.login(user);
    auth.assertLoggedIn(user.name);
    auth.deleteThroughUi();
    needsApiCleanup = false;
  });

  it('TC03 - rejeita email/senha incorretos', () => {
    const unknown = makeUser();
    auth.open();
    auth.login({ email: unknown.email, password: data.invalidPassword });
    cy.get('.login-form').contains(/your email or password is incorrect!/i)
      .should('be.visible');
  });

  it('TC04 - efetua logout e volta à página de login', () => {
    user = makeUser();
    createAccount(user);
    needsApiCleanup = true;
    auth.open();
    auth.login(user);
    auth.assertLoggedIn(user.name);
    auth.logout();
  });

  it('TC05 - exibe erro ao cadastrar email já existente', () => {
    user = makeUser();
    createAccount(user);
    needsApiCleanup = true;
    auth.open();
    cy.contains('h2', /new user signup!/i).should('be.visible');
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('.signup-form').contains(/email address already exist!/i).should('be.visible');
  });
});
