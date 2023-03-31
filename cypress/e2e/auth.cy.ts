const credentials = {
  email: 'ashketchum@gmail.com',
  password: '12345'
}

it('Successful Login', () => {
  cy.visit("http://localhost:3000");

  // Enter username and password in form 
  cy.get("input[name=email]").type(credentials.email);
  cy.get("input[name=password]").type(credentials.password).type("{enter}");

  // If login is successful, redirect to path /dashboard
  cy.location("pathname").should("include", "/dashboard");
})

it('Invalid email credential', () => {
  cy.visit('http://localhost:3000')

  // Enter username and password in form 
  cy.get("input[name=email]").type("ddd{enter}");
  cy.get("input[name=password]").type("ddd{enter}").type("{enter}");
  cy.get("[data-cy=sign-in]").click();
  
  cy.log('Must be a valid email')
})

it('Unsuccesful Login by wrong credentials', () => {
  cy.visit('http://localhost:3000')

  // Enter username and password in form 
  cy.get("input[name=email]").type("ash@gmail.com{enter}");
  cy.get("input[name=password]").type("1234{enter}").type("{enter}");
  cy.get("[data-cy=sign-in]").click();

  cy.log('Invalid password or wrong email')
})

it('User Logout', () => {
  cy.visit('http://localhost:3000')

    // Enter username and password in form 
  cy.get("input[name=email]").type(credentials.email);
  cy.get("input[name=password]").type(credentials.password).type("{enter}");

  cy.get("[data-cy=user-icon]").click();
  cy.get("[data-cy=logout]").click();

  cy.log('Successful logout')
})