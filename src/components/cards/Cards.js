import './Cards.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.poster_path}></img>
    </div>
  )
}

export default Card;