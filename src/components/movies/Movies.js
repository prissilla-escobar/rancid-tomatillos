import Card from '../cards/Cards'
import './Movies.css'

function Movies({movies}) {
  const movieCards = movies.movies.map(movie => {
    return (
      <Card 
        id={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        key={movie.id}
      />
    )
  })
  return (
    <div className='movies-container'>
      <section className='show-movies'>
        {movieCards}
      </section>
    </div>
  )
}

export default Movies;