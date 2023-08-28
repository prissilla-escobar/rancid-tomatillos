import Card from '../cards/Cards'
import './Movies.css'

function Movies({movies, showSelectedMovie}) {
  const movieCards = movies.map(movie => {
    return (
      <Card 
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        key={movie.id}
        showSelectedMovie={showSelectedMovie}
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