
import './SelectedMovie.css'
import PropTypes from 'prop-types'
import rewindImage from '../../images/rewind-button (1).png'
import { Link } from 'react-router-dom'

function SelectedMovieCard(props) {
    const dayjs = require('dayjs')

    return (
      <div className='selected-movie-card'>
        <div className='selected-movie-container'>
          <Link to={`/`}>
            <img className='back-button' alt='back button' src={rewindImage} onClick={() => {props.showMovies()}}></img>
          </Link>
          <div className='selected-movie-poster-container'>
            <img src={props.poster_path} className="selected-movie-poster" alt={`movie poster for the movie titled ${props.title}`}></img>
            <div className='movie-info'>
              <h1 className='movie-title'>{props.title}</h1>
              <div className='release-year'>
                <h2>({dayjs(props.release_date)?.format('YYYY')}), {props.runtime}min</h2>
              </div>
              <h3 className='rating'>
                Average Rating: {props.average_rating?.toFixed(1) * 10}% &#127813;<br />
                {props.genres?.join('/')}
              </h3>
              <p className='overview'>
                {props.overview}
              </p>
            </div>
          </div>
          <iframe className='trailer' title={`Embedded youtube trailer for the movie titled ${props.title}`} width='560' height='315' src= {`https://www.youtube.com/embed/${props.trailerKey}`}></iframe>
        </div>
      </div>
    )
  }
  
  export default SelectedMovieCard;

  SelectedMovieCard.propTypes = {
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    trailerKey: PropTypes.string,
    showMovies: PropTypes.func
  } 