// import logo from './logo.svg';
import './App.css';
import Card from './components/cards/Cards'
import { useState, useEffect } from 'react';
import Movies from './components/movies/Movies';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import {getAllMovies, getSelectedMovieData, getVideoData} from './api';
import ServerError from './components/serverError/ServerError';
import Header from './components/headers/Header.js'
import { Routes, Route} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(false)
  const [trailerKey, setTrailerKey] = useState('')
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getAllMovies() 
      .then(data => {
        setMovies(data.movies)
      })
      .catch(error => {
        setServerError({hasError: true, message: `${error.message}`})
      })
    }, [])

  function showSelectedMovie(id) {
    const singleMovie = movies.find(movie => movie.id === id)
    getSelectedMovieData(id).then(data => setSelectedMovie(data.movie))
    getVideoData(id).then(vidData => setTrailerKey(vidData))
  }
  
  function showMovies() {
    setSelectedMovie(false)
  }

  return (
    <div className="App">
      <Header />
        <Routes>
          {serverError.hasError && <ServerError serverError={serverError} />}
          <Route path='/' element={<Movies showSelectedMovie={showSelectedMovie} movies={movies}/>} />
          <Route path='/:movieId' element={<SelectedMovie selectedMovie={selectedMovie} showMovies={showMovies} trailerKey={trailerKey} />} />
        </Routes>
    </div>
  );
}

export default App;
