class ShopPage {
  assertHome() {
    cy.get('a[href="/products"]').filter(':visible').first().should('be.visible');
    cy.get('.features_items').should('exist');
  }

  openProducts() {
    cy.get('a[href="/products"]').filter(':visible').first().click();
    cy.location('pathname').should('eq', '/products');
    cy.contains('h2', /all products/i).should('be.visible');
  }

  addFirstProductToCart() {
    cy.get('.features_items .product-image-wrapper').first()
      .find('.productinfo a.add-to-cart').scrollIntoView().click();
    cy.contains('button', /continue shopping/i).should('be.visible').click();
  }

  openCart() {
    cy.get('a[href="/view_cart"]').filter(':visible').first().click();
    cy.location('pathname').should('eq', '/view_cart');
    cy.get('#cart_info .cart_description').should('have.length.at.least', 1);
  }

  checkout(card, comment) {
    cy.get('a.check_out').contains(/proceed to checkout/i).click();
    cy.location('pathname').should('eq', '/checkout');
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
    cy.contains(/review your order/i).should('be.visible');
    cy.get('textarea[name="message"]').type(comment);
    cy.contains('a', /place order/i).click();
    cy.location('pathname').should('eq', '/payment');

    cy.get('[data-qa="name-on-card"]').type(card.name);
    cy.get('[data-qa="card-number"]').type(card.number, { log: false });
    cy.get('[data-qa="cvc"]').type(card.cvc, { log: false });
    cy.get('[data-qa="expiry-month"]').type(card.month);
    cy.get('[data-qa="expiry-year"]').type(card.year);
    cy.get('[data-qa="pay-button"]').click();

    cy.contains(/your order has been placed successfully!|congratulations! your order has been confirmed!/i)
      .should('be.visible');
  }
}

module.exports = new ShopPage();
