/// <reference types="cypress" />

describe("Update Account Settings", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et modifier son compte", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.url().should("include", "http://localhost:5173/dashboard");

    cy.get(".text-sidebar-foreground").contains("Account & Settings").click();

    cy.url().should(
      "include",
      "http://localhost:5173/dashboard/accountsetting"
    );

    cy.get("#edit-account").click({ force: true });

    cy.get("#firstName").clear().type("Test");
    cy.get("#lastName").clear().type("Test");
    cy.get("#email").clear().type("mawatige@gmail.com");
    cy.get("#phone").clear().type("699284295");

    cy.get(".bg-green-600").contains("Save Changes").click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");

    
  });
});
