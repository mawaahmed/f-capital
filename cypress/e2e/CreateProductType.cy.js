/// <reference types="cypress" />

describe("Create Product Classification", () => {
  const email = "corextreme1@gmail.com";
  const password = "Qawsedrftg";
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

    cy.get(".justify-center")
      .contains("Create a Product Classification")
      .click();
    cy.get('[role="dialog"]').should("be.visible");

    cy.get('[role="dialog"]')
      .contains("Product Type")
      .should("be.visible")
      .click();

    cy.get("#name").type(name);
    cy.get("#code").type(code);
    cy.get("#description").type(description);

    cy.get(".text-white").contains("Save").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
