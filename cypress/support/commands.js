import userData from '../support/factories/userData';

Cypress.Commands.add('acessarPage', () => {
  cy.visit('/')
})

Cypress.Commands.add('login', () => {
  const email = userData.user().email;
  const senha = userData.user().senha;
  
  cy.session([email, senha], ()=> {
    cy.visit('/login')
    cy.get('#user').type(email);
    cy.get('#password').type(senha);
    cy.get('#btnLogin').click();
    cy.get('div.swal2-popup ')
    .should('contain', 'Login realizado')
    cy.get('.swal2-confirm').click()
  })
})

Cypress.Commands.add('acessarTelaLogin', () => {
  cy.get('#top_header').find('.fa-user').click();
  cy.get('.account_form').should('contain', 'Login');
});

Cypress.Commands.add('validarMensagemDeErro', (mensagem) => {
  cy.get('.account_form').contains(mensagem)
});