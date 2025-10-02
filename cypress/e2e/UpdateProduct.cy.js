// http://localhost:5173/dashboard/edit-product/3

describe("Update un produit", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et creer un produit", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.get(".text-sidebar-foreground").contains("Product List").click();

    // cy.url().should('include', 'http://localhost:5173/dashboard');

    cy.visit("http://localhost:5173/dashboard/product-management");


    cy.get("#edit-product").click({ force: true });

    cy.url().should(
      "include",
      "http://localhost:5173/dashboard/edit-product/3"
    );

    cy.get("#title").clear().type("Test Product");
    cy.get("#description").clear().type("This is a test product description.");
    cy.get("#unit").clear().type("pcs");
    cy.get("#unitPrice").clear().type("100");

    cy.get('input[type="file"]').selectFile("cypress/fixtures/image.png", {
      force: true,
    });
    

    cy.get(".text-white").contains("Save Changes").click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
