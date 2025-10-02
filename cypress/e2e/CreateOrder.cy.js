describe("Create Order", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const qty = 50;
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et passer une commande", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.get(".text-sidebar-foreground").contains("Orders").click();

    // cy.url().should('include', 'http://localhost:5173/dashboard');

    cy.visit("http://localhost:5173/dashboard/orderlist");

    cy.get(".text-white").click();

    cy.get("#add-to-cart-button-1").click();

    cy.get(".border-amber-100").type(qty);

    cy.get(".cursor-pointer").contains("Pre-order Now").click();

    cy.get("button")
      .contains("Select a client/retailer")
      .click({ force: true });
    cy.get("#order-client-content")
      .contains("cx - Ahmed") // texte visible dans l'option
      .click({ force: true });

    cy.get("button")
      .contains("Select a payment plan")
      .click({ force: true });
    cy.get("#payment-content")
      .contains("Pay before delivery - Complete your payment before delivery")
      .click({ force: true });

    cy.get(".bg-green-600").contains("Save").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");

    
  });
});
