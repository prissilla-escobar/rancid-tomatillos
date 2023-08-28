
import './SelectedMovie.css'
import PropTypes from 'prop-types'

function SelectedMovieCard(props) {
  console.log(typeof props.showMovies)
    const dayjs = require('dayjs')
    return (
      <div className="card">
        <div>
            <img src={props.poster_path} className="movie-poster"></img>
            <img src={props.backdrop_path} className="backdrop"></img>
        </div>
        <div>
            {props.title}<br />
            {dayjs(props.release_date).format('MMMM YYYY')}
            {props.overview}
            <iframe className='trailer' src={`https://www.youtube.com/embed/${props.trailerKey}`}></iframe>
        </div>
        <button className="back-button" onClick={() => {props.showMovies()}}>Back</button>
      </div>
    )
  }
  
  export default SelectedMovieCard;

  SelectedMovieCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    trailerKey: PropTypes.string.isRequired,
    showMovies: PropTypes.func.isRequired
  } 