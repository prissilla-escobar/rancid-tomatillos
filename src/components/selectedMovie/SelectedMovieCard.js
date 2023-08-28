
import './SelectedMovie.css'

function SelectedMovieCard(props) {
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