describe("Create Order", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const qty = 50;
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

    cy.get(".text-white").click();

    cy.get("#product-title").type("Test Product");
    cy.get("#product-description").type("This is a test product description.");
    cy.get("#product-unit").type("pcs");
    cy.get("#product-unit-price").type("100");
    cy.get("#product-available-quantity").type("1000");
    cy.get("#product-minimum-order-quantity").type("1");
    cy.get("#product-minimum-ordering-price").type("100");
    cy.get("#product-maximum-ordering-price").type("1000");
    cy.contains("span", "Active").click({ force: true });

    cy.get('input[type="file"]').selectFile("cypress/fixtures/image.png", {
      force: true,
    });

    cy.get("button").contains("Product Type").click({ force: true });
    cy.get("#product-type")
      .contains("MANGUE") // texte visible dans l'option
      .click({ force: true });

    cy.get("button").contains("Product Origin Code").click({ force: true });
    cy.get("#product-origin")
      .contains("50") // texte visible dans l'option
      .click({ force: true });

    cy.get("button").contains("Choose product Category").click({ force: true });
    cy.get("#product-category")
      .contains("MANGUE NON MURE") // texte visible dans l'option
      .click({ force: true });

    cy.get("button")
      .contains("Choose product Subcategory")
      .click({ force: true });
    cy.get("#product-subcategory")
      .contains("MANGUE") // texte visible dans l'option
      .click({ force: true });

    cy.get(".text-white").contains("Save Changes").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");

    
  });
});
