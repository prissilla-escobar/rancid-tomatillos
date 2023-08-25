import Card from '../cards/Cards'
import './Movies.css'

function Movies({movies}) {
  const movieCards = movies.movies.map(movie => {
    return (
      <Card 
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        key={movie.id}
      />
    )
  })
  return (
    <div className='movies-container'>
        {movieCards}
    </div>
  )
}

export default Movies;