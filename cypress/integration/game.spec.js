beforeEach(() => {
    cy.visit('https://ng-video-games-dbb-git-master-yengajean.vercel.app/');
  })
  it('check the presence of the search button', () => {
    cy.get(".search-button").should("be.visible");
  })
  it('check the presence of the search button', () => {
    cy.get(".search-button").should("be.visible");
  })
  it('check the presence of the search field', () => {
    cy.get(".search-input").should("be.visible");
  })
  it('check that when you click on released you get the games that are put into production', () => {
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-description').should("be.visible");
  })
  it('check that when you click on released you get the games that are put into production', () => {
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-description').should("be.visible");
  })
  it('check which games have been modified', () => {
    cy.get('.mat-select-arrow').click();
    cy.get('#mat-option-4 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-thumb-container > .game-thumbnail').should("be.visible");
  })
  it('check which games have been created', () => {
    cy.get('.mat-select-arrow').click();
    cy.get('#mat-option-3 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-thumb-container > .game-thumbnail').should("be.visible");
  })
  it('check which games have been rating', () => {
    cy.get('.mat-select-arrow').click();
    cy.get('#mat-option-5 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-thumb-container > .game-thumbnail').should("be.visible");
  })
  it('check which games have been metacritic', () => {
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-6 > .mat-option-text').click();
    cy.get(':nth-child(1) > .game-thumb-container > .game-thumbnail').should("be.visible");
  })
  it('check if in the search field more than 500,000 games are visible', () => {
    cy.get('.search-input').invoke('attr', 'placeholder').should('contain', 'Search 500,000+ games');
  })