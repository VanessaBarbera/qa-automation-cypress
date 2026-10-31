function makeUser() {
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  return {
    name: 'Vanessa QA',
    email: `qa-automation-${suffix}@example.com`,
    password: 'TesteQA2026!',
    title: 'Mrs',
    birth_date: '10',
    birth_month: '5',
    birth_year: '1990',
    firstname: 'Vanessa',
    lastname: 'QA',
    company: 'Portfolio QA',
    address1: 'Rua de Teste 123',
    address2: 'Apto 2',
    country: 'United States',
    zipcode: '10001',
    state: 'New York',
    city: 'New York',
    mobile_number: '11999999999',
  };
}

module.exports = { makeUser };
