it('testa página d epolítica de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html'); 
    cy.contains('Talking About Testing').should('be.visible');

});