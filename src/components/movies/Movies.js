import Card from '../cards/Cards'
import './Movies.css'
import PropTypes from 'prop-types'

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

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
  showSelectedMovie: PropTypes.func.isRequired
}