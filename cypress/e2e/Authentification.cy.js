 /// <reference types="cypress" />

describe("Creer un compte, puis se connecter avec le nouvel utilisateur", () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it("Creer un compte utilisateur", () => {
    cy.get(".bg-brandPrimary").contains("Sign up").click({ force: true });
    cy.get("#companyName").type("cx");
    cy.get("#companyEmail").type("mawa@gmail.com");
    cy.get("#companyPhone").type("699284295");
    
    cy.get(".flex").contains("Next").click({ force: true });
  });
});


