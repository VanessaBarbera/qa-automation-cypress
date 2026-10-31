class AuthPage {
  open() {
    cy.get('a[href="/login"]').filter(':visible').first().click();
    cy.location('pathname').should('eq', '/login');
  }

  startSignup(user) {
    cy.contains('h2', /new user signup!/i).should('be.visible');
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('b', /enter account information/i).should('be.visible');
  }

  completeSignup(user) {
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type(user.password, { log: false });
    cy.get('#days').select(user.birth_date);
    cy.get('#months').select(user.birth_month);
    cy.get('#years').select(user.birth_year);
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    const fields = {
      '#first_name': user.firstname,
      '#last_name': user.lastname,
      '#company': user.company,
      '#address1': user.address1,
      '#address2': user.address2,
      '#state': user.state,
      '#city': user.city,
      '#zipcode': user.zipcode,
      '#mobile_number': user.mobile_number,
    };

    Object.entries(fields).forEach(([selector, value]) => cy.get(selector).type(value));
    cy.get('#country').select(user.country);
    cy.get('[data-qa="create-account"]').click();
    cy.contains('b', /account created!/i).should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    this.assertLoggedIn(user.name);
  }

  login(user) {
    cy.contains('h2', /login to your account/i).should('be.visible');
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password, { log: false });
    cy.get('[data-qa="login-button"]').click();
  }

  assertLoggedIn(name) {
    cy.contains('a', 'Logged in as').should('contain.text', name);
  }

  deleteThroughUi() {
    cy.get('a[href="/delete_account"]').filter(':visible').click();
    cy.contains('b', /account deleted!/i).should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }

  logout() {
    cy.get('a[href="/logout"]').filter(':visible').click();
    cy.location('pathname').should('eq', '/login');
    cy.contains('h2', /login to your account/i).should('be.visible');
  }
}

module.exports = new AuthPage();
