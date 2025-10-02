/// <reference types="cypress" />

describe("Update Product subcategory", () => {
  const subcategoryname = "Electronics";
  const subcategorycode = "ELEC12";
  const subcategorydescription = "This is a test product classification description.";
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";

  it("doit se connecter et modifier un product subcategory", () => {
    // Aller à la page de connexion
    cy.visit("http://localhost:5173/Login");

    // Remplir le formulaire de login
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.url().should("include", "http://localhost:5173/dashboard");

    cy.visit("http://localhost:5173/dashboard/product-classification");

    cy.contains('div.cursor-pointer', 'Subcategory').click();


    cy.get("#menu-button").click();

    cy.get("#name").clear().type(subcategoryname);
    cy.get("#code").clear().type(subcategorycode);
    cy.get(".resize-none").clear().type(subcategorydescription);
    // cy.get("#parentCode").type(subparentcode);

    cy.contains("button", "Save Changes").click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
