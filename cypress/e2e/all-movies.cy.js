describe("home page user flow", () => {
  
  beforeEach(() => {
    crypto.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '../fixtures/movies.json'
    })
    .visit('http://localhost:3000')
  })

  it('')
})