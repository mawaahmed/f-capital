/// <reference types="cypress" />
describe('Se connecter', () => {
    const email = 'mawatige@gmail.com';
    const password = 'Qwertyuio';
    beforeEach(() => {
    cy.visit('http://localhost:5173/Login');
  });
    it('Remplir le formulaire de connexion et reinitialiser le mot de passe', () => {
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('.text-green-800').contains('Forgot Password?').click();

        cy.visit("http://localhost:5173/forgot-password");

        cy.get('#email').type(email);
        cy.contains('button', 'Receive Verification Email').click();

        cy.contains("Update mot de passe successfully", { timeout: 5000 }).should("be.visible");

        
    });
});