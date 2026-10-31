// APIs oficiais usadas só para pré-condições e limpeza dos testes E2E.
// A API devolve responseCode dentro do body, mesmo quando o HTTP é 200.
const parseBody = (body) => typeof body === 'string' ? JSON.parse(body) : body;

function createAccount(user) {
  return cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: user,
  }).then(({ body }) => {
    expect(parseBody(body).responseCode, 'Conta criada pela API').to.eq(201);
  });
}

function deleteAccount(user) {
  return cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: { email: user.email, password: user.password },
    failOnStatusCode: false,
  }).then(({ body }) => {
    expect(parseBody(body).responseCode, 'Conta excluída pela API').to.eq(200);
  });
}

module.exports = { createAccount, deleteAccount };
