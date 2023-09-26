import testConfig from '../support/utils/testConfig';
import userData from '../support/factories/userData';

const config = testConfig.config();
const usuario = userData.user()

config.forEach((tela) => {
  describe(`Validação da funcionalidade Login - dispositivo ${tela}`, () => {
    beforeEach('Acessar sistema QAZANDO SHOP', () => {
      if (tela != 'desktop') {
        cy.viewport(tela);
      }
      cy.acessarPage();
    });

    it('Login com email inválido', () => {
      cy.acessarTelaLogin()
      cy.get('.account_form').contains('Login')
      cy.get('#user').type('teste');
      cy.get('#password').type(usuario.senha);
      cy.get('#btnLogin').click()
      cy.validarMensagemDeErro('E-mail inválido.')
    })

    it('Login com email vazio', () => {
      cy.acessarTelaLogin()
      cy.get('.account_form').contains('Login')
      cy.get('#password').type(usuario.senha);
      cy.get('#btnLogin').click()
      cy.validarMensagemDeErro('E-mail inválido.')
    })

    it('Login com senha inválida', () => {
      cy.acessarTelaLogin()
      cy.get('.account_form').contains('Login')
      cy.get('#user').type(usuario.email);
      cy.get('#password').type(123);
      cy.get('#btnLogin').click()
      cy.validarMensagemDeErro('Senha inválida.')
    })

    it('Login com senha vazio', () => {
      cy.acessarTelaLogin()
      cy.get('.account_form').contains('Login')
      cy.get('#user').type(usuario.email);
      cy.get('#btnLogin').click()
      cy.validarMensagemDeErro('Senha inválida.')
    })

    it('Login com sucesso', ()=> {
      cy.login()
      cy.get('#userLogged').click()
      cy.get('.nav > :nth-child(1) > .active').should('be.visible')
     
    })
  });
});