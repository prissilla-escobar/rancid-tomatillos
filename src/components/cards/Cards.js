import './Cards.css'
import PropTypes from 'prop-types'

function Card(props) {

  return (
    <div className="card" >
      <img src={props.poster_path} alt={`movie poster for the movie titled ${props.title}`} className="movie-poster"></img>
    </div>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
}