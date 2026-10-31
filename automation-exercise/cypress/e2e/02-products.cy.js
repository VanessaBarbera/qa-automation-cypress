const shop = require('../pages/ShopPage');
const data = require('../fixtures/data.json');
const { makeUser } = require('../support/userFactory');

describe('Automation Exercise | Produtos e newsletter', () => {
  beforeEach(() => {
    cy.visit('/');
    shop.assertHome();
  });

  it('TC08 - exibe produtos e detalhes do primeiro produto', () => {
    shop.openProducts();
    cy.get('.features_items .product-image-wrapper').its('length').should('be.greaterThan', 0);
    cy.contains('a', /view product/i).first().click();
    cy.location('pathname').should('match', /^\/product_details\/\d+$/);
    cy.get('.product-information').within(() => {
      cy.get('h2').should('not.be.empty');
      cy.contains(/category:/i).should('be.visible');
      cy.contains(/rs\./i).should('be.visible');
      cy.contains(/availability:/i).should('be.visible');
      cy.contains(/condition:/i).should('be.visible');
      cy.contains(/brand:/i).should('be.visible');
    });
  });

  it('TC09 - busca produtos relacionados ao termo', () => {
    shop.openProducts();
    cy.get('#search_product').type(data.searchProduct);
    cy.get('#submit_search').click();
    cy.contains('h2', /searched products/i).should('be.visible');
    cy.get('.features_items .productinfo p').should('have.length.at.least', 1)
      .each(($item) => expect($item.text().toLowerCase()).to.include(data.searchProduct.toLowerCase()));
  });

  it('TC10 - realiza inscrição na newsletter da home', () => {
    cy.get('#footer').scrollIntoView();
    cy.contains('h2', /subscription/i).should('be.visible');
    cy.get('#susbscribe_email').type(makeUser().email);
    cy.get('#subscribe').click();
    cy.contains(/you have been successfully subscribed!/i).should('be.visible');
  });
});
