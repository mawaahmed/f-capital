describe("Se connecter et creer une categorie de client", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const name = "boutique";
  const description = "description";
  const minimumOrderQuantity = 50;

  const qty = 50;
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et creer une categorie de client", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.get(".text-sidebar-foreground")
      .contains("Client Category")
      .click({ force: true });

    // cy.url().should('include', 'http://localhost:5173/dashboard');

    cy.visit("http://localhost:5173/dashboard/client-category");

    cy.get(".bg-green-100").click();

    cy.get("#name").type(name);
    cy.get("#description").type(description);
    cy.get("#minimumOrderQuantity").type(qty);

    

    cy.get("#submit").contains("Save").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");

    
  });
});
