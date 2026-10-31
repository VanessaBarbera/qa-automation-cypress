const auth = require('../pages/AuthPage');
const shop = require('../pages/ShopPage');
const { makeUser } = require('../support/userFactory');
const { createAccount, deleteAccount } = require('../support/accountApi');
const data = require('../fixtures/data.json');

describe('Automation Exercise | Compras', () => {
  let user;
  let needsApiCleanup;

  beforeEach(() => {
    user = makeUser();
    needsApiCleanup = false;
    cy.visit('/');
    shop.assertHome();
  });

  afterEach(() => {
    if (needsApiCleanup) deleteAccount(user);
  });

  it('TC15 - cadastra antes do checkout, compra e remove a conta', () => {
    auth.open();
    auth.startSignup(user);
    auth.completeSignup(user);
    shop.addFirstProductToCart();
    shop.openCart();
    shop.checkout(data.card, data.orderComment);
    auth.deleteThroughUi();
  });

  it('TC16 - faz login antes do checkout, compra e remove a conta', () => {
    createAccount(user);
    needsApiCleanup = true;
    auth.open();
    auth.login(user);
    auth.assertLoggedIn(user.name);
    shop.addFirstProductToCart();
    shop.openCart();
    shop.checkout(data.card, data.orderComment);
    auth.deleteThroughUi();
    needsApiCleanup = false;
  });
});
