describe('automate filling a form ', () => {
  beforeEach(() => {  
    cy.visit('https://saucedemo.com'); 
   });

	it('should successfully fill out all fields and submit the form', ()=> {      
cy.get('#firstName-input').type('Prudent');
cy.get('#lastName-input').type('Muthoni'); cy.get('#email-input').type('muthoni@gmail.com.com'); cy.get('#password-input').type('muthoni 123.'); 
cy.get('#birth-date-picker').type('2026-06-30').type('{enter}');     
cy.get('#country-dropdown').select('Kenya');
cy.get('input[type="radio"][value="female"]').check().should('be.checked');
cy.get('#terms-checkbox').check().should('be.checked');

cy.contains('button[type="submit"]').click();

cy.get('.alert-success').should('be.visible').and('contain.text', 'Registration completed successfully!');

}); 
});
