import './SelectedMovie.css'
import SelectedMovieCard from './SelectedMovieCard'
import PropTypes from 'prop-types'

function SelectedMovie({selectedMovie, showMovies, trailerKey}) {
  console.log(typeof selectedMovie.overview)
   return (
    <div className='single-movie-container'>
       <SelectedMovieCard 
        key={selectedMovie.id}
        id={selectedMovie.id}
        title={selectedMovie.title}
        poster_path={selectedMovie.poster_path}
        rating={selectedMovie.average_rating}
        release_date={selectedMovie.release_date}
        backdrop_path={selectedMovie.backdrop_path}
        average_rating={selectedMovie.average_rating}
        genres={selectedMovie.genres}
        runtime={selectedMovie.runtime}
        overview={selectedMovie.overview}
        showMovies={showMovies}
        trailerKey={trailerKey}
      />
    </div>
   )
}

export default SelectedMovie

SelectedMovie.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  showMovies: PropTypes.func.isRequired,
  trailerKey: PropTypes.string.isRequired
}