import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/movies/Movies';
import { getAllMovies } from './api';
import ServerError from './components/serverError/ServerError';
import Header from './components/headers/Header.js'
import { Routes, Route } from 'react-router-dom'
import SelectedMovieCard from '../src/components/selectedMovie/SelectedMovieCard'

function App() {
  const [movies, setMovies] = useState([])
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

  return (
    <div className="App">
      <Header />
        <Routes>
          {serverError.hasError && <ServerError serverError={serverError} />}
          <Route path='/' element={<Movies movies={movies} setServerError={setServerError} />} />
          <Route path='/:movieId' element={<SelectedMovieCard  setServerError={setServerError}  />} />
        </Routes>
    </div>
  );
}

export default App;
