import './Cards.css'
import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className="card" onClick={() => props.showSelectedMovie(props.id)}>
      <img src={props.poster_path} className="movie-poster"></img>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  showSelectedMovie: PropTypes.func.isRequired
}