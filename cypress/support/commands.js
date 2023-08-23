Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get("#firstName").type("Gabrieli");
    cy.get("#lastName").type("Ribeiro");
    cy.get("#email").type("gabrieli@exemplo.com");
    cy.get("#open-text-area").type("Teste");
    cy.contains('button', 'Enviar').click();
})