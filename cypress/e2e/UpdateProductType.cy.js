/// <reference types="cypress" />

describe("Update Product Type", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const name = "biscuits";
  const code = "03";
  const description = "consommation de consommation frais";

  it("se connecter et créer un product type", () => {
    // Aller à la page de connexion
    cy.visit("http://localhost:5173/Login");

    // Remplir le formulaire de login
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.url().should("include", "http://localhost:5173/dashboard");

    cy.get(".text-sidebar-foreground").contains("Product Classification").click();

    cy.visit("http://localhost:5173/dashboard/product-classification");

    cy.get("#menu-button").click({ force: true });


    cy.get("#name").clear().type(name);
    cy.get("#code").clear().type(code);
    cy.get(".resize-none").clear().type(description);

    cy.get(".text-white").contains("Save Changes").click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");

    
  });
});
