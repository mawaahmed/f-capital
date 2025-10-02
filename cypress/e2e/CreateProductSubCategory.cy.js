/// <reference types="cypress" />

describe("Create Product Classification", () => {
  const subcategoryname = "Electronics";
  const subcategorycode = "ELEC12";
  const subcategorydescription = "This is a test product classification description.";
  const subparentcode = "ELEC123";
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";

  it("doit se connecter et créer un product subcategory", () => {
    // Aller à la page de connexion
    cy.visit("http://localhost:5173/Login");

    // Remplir le formulaire de login
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.url().should("include", "http://localhost:5173/dashboard");
    cy.visit("http://localhost:5173/dashboard/product-classification");

    cy.get(".justify-center")
      .contains("Create a Product Classification")
      .click();
    cy.get('[role="dialog"]').should("be.visible");

    cy.get('[role="dialog"]')
      .contains("Product Subcategory")
      .should("be.visible")
      .click();

    cy.get("#name").type(subcategoryname);
    cy.get("#code").type(subcategorycode);
    cy.get("#description").type(subcategorydescription);
    cy.get("#parentCode").type(subparentcode);

    cy.contains("button", "Save").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
