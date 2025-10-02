/// <reference types="cypress" />

describe("Create Product Classification", () => {
  const categoryname = "Electronics";
  const categorycode = "ELEC12";
  const categorydescription = "This is a test product classification description.";
  const parentcode = "ELEC123";
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";

  it("doit se connecter et créer un product category", () => {
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
      .contains("Product Category")
      .should("be.visible")
      .click();

    cy.get("#name").type(categoryname);
    cy.get("#code").type(categorycode);
    cy.get("#description").type(categorydescription);
    cy.get("#parentCode").type(parentcode);

    cy.contains("button", "Save").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
