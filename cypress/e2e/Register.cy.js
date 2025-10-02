 /// <reference types="cypress" />

describe("Demande de Creation de compte, puis se connecter avec le nouvel utilisateur", () => {
  //beforeEach permet de réinitialiser l'état de l'application avant chaque test
  beforeEach(() => {
    cy.visit('https://diisty.com/SignUp');
  });
  it("Creer un compte utilisateur", () => {
    cy.get(".bg-brandPrimary").contains("Sign up").click({ force: true });
    cy.get("#nom").type("mawa");
    cy.get("#entreprise").type("cx");
    cy.get("#email").type("mawa@gmail.com");
    cy.get("#telephone").type("699284295");
    cy.get("#message").type("test");
    cy.get(".text-white").contains("Send Message").click({ force: true });
  });
});