describe('Data Table Test Suite', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    cy.visit('https://saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('should successfully count rows and columns, read cell data, and click row actions', () => {
    cy.get('.inventory_item').should('have.length', 6);
    cy.get('.inventory_item_description').should('have.length', 6);
    cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack');
    cy.get('.btn_inventory').first().click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });
  
});
