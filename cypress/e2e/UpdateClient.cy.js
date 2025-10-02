describe("Create un client", () => {
  const email = "mawatige@gmail.com";
  const password = "Qwertyuiop";
  const fullName = "corextreme";
  const address = "390";
  const email1 = "mawatige@gmail.com";
  const contactPersonName = "mawatige";
  const contactPersonPhone = "699284295";
  const phone = "699284295";

  const qty = 50;
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });
  it("Remplir le formulaire de connexion et update un client", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".bg-green-800").contains("Login").click();

    cy.get(".text-sidebar-foreground")
      .contains("Client List")
      .click({ force: true });

    // cy.url().should('include', 'http://localhost:5173/dashboard');

    cy.visit("http://localhost:5173/dashboard/clientlist");

    cy.get("#edit").click({ force: true });
    

     cy.url().should('include', 'http://localhost:5173/dashboard/clientprofile/3');

    cy.contains('button', 'Edit Profile').click();

    cy.get("#fullName").clear().type(fullName);
    cy.get("#address").clear().type(address);
    cy.get("#phone").clear().type(phone);
    cy.get("#email").clear().type(email1);
    cy.get("#contactPersonName").clear().type(contactPersonName);
    cy.get("#contactPersonPhone").clear().type(contactPersonPhone);
    
    cy.contains('button', 'Save Changes').click();

    cy.contains("Information updated successfully", { timeout: 5000 }).should("be.visible");
    
  });
});
