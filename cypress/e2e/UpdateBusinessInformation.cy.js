/// <reference types="cypress" />

describe("Update Bussiness Information", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";

  it("doit se connecter et modifier son compte", () => {
    // Aller à la page de connexion
    cy.visit("http://localhost:5173/Login");

    // Remplir le formulaire de login
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.url().should("include", "http://localhost:5173/dashboard");

    cy.visit("http://localhost:5173/dashboard/accountsetting");

    cy.get(".cursor-pointer").contains("Business Information").click();

    cy.get("#edit-account").contains("Edit Account Information").click();

    // cy.get("#name").clear().type("Test");
    cy.get("#business").clear().type("Test");
    cy.get("#contact").clear().type("Test");
    cy.get("#address").clear().type(900);
    cy.get("#email").clear().type("mawatige@gmail.com");
    cy.get("#phone").clear().type("699284295");
    // cy.get("#parentCode").type(subparentcode);

    cy.contains("button", "Save Changes").click();


     cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");
  });
});
