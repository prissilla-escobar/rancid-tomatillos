import './Cards.css'
import PropTypes from 'prop-types'

function Card(props) {
  console.log(props)
  return (
    <div className="card" onClick={() => props.showSelectedMovie(props.id)}>
      <img src={props.poster_path} alt={`movie poster for the movie titled ${props.title}`} className="movie-poster"></img>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  showSelectedMovie: PropTypes.func.isRequired
}