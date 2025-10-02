/// <reference types="cypress" />

describe("Update Product category", () => {
  const categoryname = "Electronics";
  const categorycode = "ELEC12";
  const categorydescription = "This is a test product classification description.";
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


    cy.contains('div.cursor-pointer', 'Category').click();


    cy.get("#menu-button").click();

    cy.get("#name").clear().type(categoryname);
    cy.get("#code").clear().type(categorycode);
    cy.get(".resize-none").clear().type(categorydescription);

    cy.contains("button", "Save Changes").click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
