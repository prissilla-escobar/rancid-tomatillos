describe('should get all movies from home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    })
    .visit('http://localhost:3000')
  })

  it('should get black adam movie', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie1'
    })
  })
  it('should load correct background', () => {
    cy.get('.selected-movie-card')
      // .should('have.attr', 'style')
      // .should('include', 'backgroundImage')
      // .should('include', 'url("https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg)')
  })
  
})