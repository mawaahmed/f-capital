 /// <reference types="cypress" />

describe("Creer un compte etape 1", () => {
  const password = "Qawsedrftg";
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it("Creer un compte utilisateur", () => {
    cy.get(".transition-all").contains("Sign up").click({ force: true });
    cy.get("#companyName").type("corextreme1");
    
    cy.get("#companyEmail").type("corextreme1@gmail.com");
    cy.get("#companyPhone").type("699284295");
    cy.get('button').contains('Select an company category').click({ force: true });
    cy.get('#company-category-select')
      .contains('Retail') // texte visible dans l'option
      .click({ force: true });

    cy.get(".flex").contains("Next").click({ force: true });

    

    cy.get("#firstName").type("Abou");
    cy.get("#accountEmail").type("corextreme1@gmail.com");
    cy.get("#accountPhone").type("699284295");
    cy.get("#lastName").type("Arafath");
    cy.get("#password").type(password);
    cy.get("#confirmPassword").type(password);


    cy.get(".text-white").contains("Next").click();

    // cy.url().should('include', 'http://localhost:5173/Login');
  });
});


