describe("Create un client", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const companyName = "corextreme";
  const address = "390";
  const contactPersonName = "mawatige";
  const contactPersonEmail = "mawatige@gmail.com";
  const contactPersonPhone = "699284295";
  const phone = "699284295";

  const qty = 50;
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et creer un client", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.get(".text-sidebar-foreground")
      .contains("Client List")
      .click({ force: true });

    // cy.url().should('include', 'http://localhost:5173/dashboard');

    cy.visit("http://localhost:5173/dashboard/clientlist");

    cy.get(".text-white").click({ force: true });

    cy.get("#company-name").type(companyName);
    cy.get("#company-address").type(address);
    cy.get("#contactPersonName").type(contactPersonName);
    cy.get("#contactPersonEmail").type(contactPersonEmail);
    cy.get("#contactPersonPhone").type(contactPersonPhone);
    cy.get("#phone").type(phone);

    cy.get("#company-category").click();
    cy.get("#company-Category")
      .contains("restaurant") // texte visible dans l'option
      .click({ force: true });

    cy.get(".rounded").contains("Save and Invite Retailer").click();

    cy.contains("Create successfully", { timeout: 5000 }).should("be.visible");

  });
});
