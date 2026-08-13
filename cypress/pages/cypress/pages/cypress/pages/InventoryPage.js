class InventoryPage {
  getTitle() {
    return cy.get('.title');
  }

  getInventoryItems() {
    return cy.get('.inventory_item');
  }

  addFirstProductToCart() {
    cy.get('.inventory_item').first().find('button').click();
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }
}

module.exports = new InventoryPage();
