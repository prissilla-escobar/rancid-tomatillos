import './Cards.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.poster_path} className="movie-poster"></img>
    </div>
  )
}

export default Card;