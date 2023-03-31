const REACT_APP_BASE_URL_API= 'https://pokeapi.co/api/v2'

it('Load more Pokemons', () => {
  const credentials = {
    email: 'ashketchum@gmail.com',
    password: '12345'
  }
  
  cy.visit('http://localhost:3000')

    // Enter username and password in form 
  cy.get("input[name=email]").type(credentials.email);
  cy.get("input[name=password]").type(credentials.password).type("{enter}");

  cy.get("[data-cy=load-more]").click();

  //Request to PokeAPI
  cy.request({
    method: 'GET', 
    url: `${REACT_APP_BASE_URL_API}?limit=10&offset=0`, 
  }).then( ({ status }) => {
    expect(status).to.eq(200)
  })
})