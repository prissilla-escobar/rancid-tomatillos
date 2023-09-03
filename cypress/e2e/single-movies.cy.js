describe('should intercept', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    }).visit('localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie1'
    })
  })

  it('should get black adam movie and show details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie1'
    }).as('baTest')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      body: {
        "videos": [
          {
            id: 15,
            movie_id: 436270,
            key:"mkomfZHG5q4",
            site: "YouTube",
            type:"Trailer"
          }
        ]
      }
    }).as('baTrailer')

    .get('.card').first().click()
      cy.wait(['@baTest', '@baTrailer'])
      .url().should('eq', 'http://localhost:3000/436270')

    .get('.rancid-logo')
      .should('have.attr', 'alt')

    .get('.single-movie-container')
      .should('have.attr', 'style')
      .should('include', 'background-image')
      .should('include', 'url("https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg")')

    .get('.movie-info').contains('h1', 'Black Adam')
      .get('.release-year').contains('h2', '2022')
      .get('.rating').contains('h3', '40')
      .get('.overview').contains('p')

    .get('iframe')
      .should('have.attr', 'src')
      .then((src) => {
        expect(src).to.equal('https://www.youtube-nocookie.com/embed/mkomfZHG5q4')
      })

    .get('.back-button').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })

  it('user should be taken back home upon rancid logo click', () => {
    cy.visit('localhost:3000/436270')
    .get('.rancid-logo').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 400 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 400}).as('errorTest')
      .visit('http://localhost:3000/')
      .wait('@errorTest')
      .get('p').should('contain', 'Movies not found.')
      .get('text').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500}).as('errorTest2')
      .visit('http://localhost:3000/')
      .wait('@errorTest2')
      .get('p').should('contain', 'Movies not found.')
      .get('text').click()
      .url().should('eq', 'http://localhost:3000/')
  })

})