/// <reference types="cypress" />
describe('Se connecter', () => {
    const email = 'mawatige@gmail.com';
    const password = 'Qwertyuiop';
    beforeEach(() => {
    cy.visit('http://localhost:5173/Login');
  });
    it('Remplir le formulaire de connexion', () => {
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('.bg-green-800').contains('Login').click();

        cy.on('window:alert', (validerAvecSuccess) => {
            expect(validerAvecSuccess).to.equal('Login successful');
        });
    });
});