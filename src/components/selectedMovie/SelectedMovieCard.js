
import './SelectedMovie.css'
import PropTypes from 'prop-types'

function SelectedMovieCard(props) {
  // console.log(props.overview)
    const dayjs = require('dayjs')
    return (
      <div className="selected-movie-card">
        <div className="backdrop" style={{backgroundImage:`url(${props.backdrop_path})`}}>

            <div className='selected-movie-container'>
                <img src={props.poster_path} className="selected-movie-poster"></img>
                <div className='movie-info'>
                  <h2 className='movie-title'>{props.title} {dayjs(props.release_date).format('MMMM YYYY')}</h2>
                  <p>{props.overview}</p>
                </div>
                <iframe className='trailer' src= {`https://www.youtube.com/embed/${props.trailerKey}`}></iframe>
            </div>
            <button className="back-button" onClick={() => {props.showMovies()}}>Back</button>
        </div>
        
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