
import { useHistory } from 'react-router-dom'

function SelectedMovieCard(props) {
    console.log(props)
    const dayjs = require('dayjs')
    // const history = useHistory()

    // const goBack = () => {history.goBack()}

    return (
      <div className="card">
        <div>
            <img src={props.poster_path} className="movie-poster"></img>
        </div>
        <div>
            {props.title}<br />
            {dayjs(props.release_date).format('MMMM YYYY')}
        </div>
        <button className="back-button">Back</button>
      </div>
    )
  }
  
  export default SelectedMovieCard;