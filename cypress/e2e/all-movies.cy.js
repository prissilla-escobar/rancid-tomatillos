describe("home page user flow", () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '../fixtures/movies.json'
    })
    .visit('http://localhost:3000')
  })

  it('should display header', () => {
    cy.get('.rancid-logo')
      .should('have.attr', 'alt')
    cy.location('pathname').should('eq', '/')
  })

  it('should display all movie posters', () => {
    cy.get('.movies-container').children()
      .should('have.length', 5)
    cy.get(':nth-child(1) > .movie-poster')
      .should('have.attr', 'alt')
    // cy.contains('.movie-title', 'Black Adam')
  })

  it('should update url to clicked movie details', () => {
    cy.get(':nth-child(1) > .movie-poster').click()
      .url().should('eq', 'http://localhost:3000/436270')
  })

  // it('should display an error message for 400 error', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
  //     statusCode: 400,
  //   })
  //   cy.contains('h4', 'Sorry, no movies to display.')
  // })

  // it('should display an error message for 500 error', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
  //     statusCode: 500,
  //   })
  //   cy.contains('h4', 'Sorry, no movies to display.')
  // })

  // it('should display an error message for 300 response', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
  //     statusCode: 300,
  //   })
  //   cy.contains('h4', 'Sorry, no movies to display.')
  // })
})