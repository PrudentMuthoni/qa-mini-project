describe('filling out the fields in the form', () => {
  beforeEach(()=>{
   cy.visit('https://testautomationpractice.blogspot.com/')
   cy.title().should('include', 'Automation Testing Practice');
   })
  it('should be able to input data in different fields with different elements', () => {
   
    cy.get('#name').type('Prudent Muthoni');
    cy.get('#email').type('muthoni@gmail.com');
    cy.get('#phone').type('254788993355');
    cy.get('#textarea').type('1616, Korongo Road Karen');

    cy.get('#name').should('have.value', 'Prudent Muthoni');

    cy.get('#male').check();
    cy.get('#male').should('be.checked');

    cy.get('#monday').check();
    cy.get('#monday').uncheck();

    cy.get('#monday').should('not.be.checked');

    cy.get('#country').select('United Kingdom');

    // cy.get('#country').should('have.value', 'UK');

    cy.get('#male').check();
    cy.get('#male').should('be.checked');

    // 6. Upload a file using the guaranteed default fixture file
    const fileName = 'example.json';
    cy.get('#singleFileInput').selectFile(`cypress/fixtures/${fileName}`);

    // 7. Scroll to the bottom of the page to bypass missing element errors
    cy.scrollTo('bottom');


  })
})