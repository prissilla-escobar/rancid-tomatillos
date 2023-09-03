import './SelectedMovie.css'
import rewindImage from '../../images/rewind-button (1).png'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSelectedMovieData, getVideoData } from '../../api';

function SelectedMovieCard({setServerError}) {
    const dayjs = require('dayjs')
    const {movieId} = useParams()
    const [selectedMovie, setSelectedMovie] = useState(false)
    const [trailerKey, setTrailerKey] = useState('')

    useEffect( () => {  
      getSelectedMovieData(movieId)
        .then(data => setSelectedMovie(data.movie))
        .catch(error => setServerError({hasError: true, message: `${error.message}`}))
      }, [])
  
      useEffect( () => {  
        getVideoData(movieId)
          .then(key => setTrailerKey(key))
          .catch(e => setTrailerKey(''))
      }, [])
  
    return selectedMovie && (
      <div className='single-movie-container' style={{backgroundImage:`url(${selectedMovie.backdrop_path}`,   backgroundSize:'cover'}}>
        <div className='selected-movie-card'>
          <div className='selected-movie-container'>
            <Link to={`/`}>
              <img className='back-button' alt='back button' src={rewindImage}></img>
            </Link>
            <div className='selected-movie-poster-container'>
              <img src={selectedMovie.poster_path} className="selected-movie-poster" alt={`movie poster for the movie titled ${selectedMovie.title}`}></img>
              <div className='movie-info'>
                <h1 className='movie-title'>{selectedMovie.title}</h1>
                <div className='release-year'>
                  <h2>({dayjs(selectedMovie.release_date)?.format('YYYY')}), {selectedMovie.runtime}min</h2>
                </div>
                <h3 className='rating'>
                  Average Rating: {selectedMovie.average_rating?.toFixed(1) * 10}% &#127813;<br />
                  {selectedMovie.genres?.join('/')}
                </h3>
                <p className='overview'>
                  {selectedMovie.overview}
                </p>
              </div>
            </div>
            <iframe className='trailer' title={`Embedded youtube trailer for the movie titled ${selectedMovie.title}`} width='560' height='315' src= {`https://www.youtube-nocookie.com/embed/${trailerKey}`}></iframe>
          </div>
        </div>
      </div>
    )
  }
  
  export default SelectedMovieCard;