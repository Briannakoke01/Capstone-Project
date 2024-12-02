describe('Meme Generator', () => {
    it('should generate meme image with custom text', () => {
      const topText = 'Top Text';
      const bottomText = 'Bottom Text';
      // Visit the meme generator page (using baseUrl from cypress.json)
      cy.visit('/');

      // Interact with the form
      cy.get('input[id="top-text"]').type(topText);
      cy.get('input[id="bottom-text"]').type(bottomText);
      cy.get('button').contains('Generate').should('be.visible');

    });

})