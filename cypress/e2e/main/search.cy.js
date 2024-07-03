describe('Wikipedia Search Functionality', () => {
    beforeEach(() => {
      cy.visit('https://www.wikipedia.org/');
    });
  
    it('should perform a search and navigate to the results page', () => {
      const searchTerm = 'Brasil';
      cy.get('#searchInput').type(searchTerm);
      cy.get('button[type="submit"]').click();
      const expectedUrlPart = 'Brazil'; 
      // Verify URL
      cy.url().should('include', `wiki/${expectedUrlPart}`);
      // Verify the presence of the title of the "Brasil" page
      cy.get('#firstHeading').should('contain.text', 'Brazil');
    });
  });
  