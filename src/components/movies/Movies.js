import Card from '../cards/Cards'
import './Movies.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movies({movies}) {
  const movieCards = movies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
      <Card 
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        key={movie.id}
      />
      </Link>
    )
  })

  return (
    <div className='movies-container'>
        {movieCards}
    </div>
  )
}

export default Movies

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
}