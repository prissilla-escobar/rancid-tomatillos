// import logo from './logo.svg';
import './App.css';
// import movieData from './movieData';
import Card from './components/cards/Cards'
import { useState, useEffect } from 'react';
import Movies from './components/movies/Movies';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import {getAllMovies, getSelectedMovieData, getVideoData} from './api';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(false)
  const [trailerKey, setTrailerKey] = useState('')

  useEffect(() => {
    getAllMovies() 
      .then(data => {
        return setMovies(data.movies)
      })
    }, [])

  useEffect(() => {
    getVideoData(id)
    .then(vidData => setTrailerKey(vidData))
  })

  function showSelectedMovie(id) {
    const singleMovie = movies.find(movie => movie.id === id)
    setSelectedMovie(singleMovie)
    getSelectedMovieData(id).then(data => setSelectedMovie(data.movie))

  }
  
  function showMovies() {
    setSelectedMovie(false)
  }

  return (
    <div className="App">
      {!selectedMovie && <Movies showSelectedMovie={showSelectedMovie} movies={movies}/>}
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} showMovies={showMovies}/>}
    </div>
  );
}

export default App;
