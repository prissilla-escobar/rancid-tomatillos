// import logo from './logo.svg';
import './App.css';
import movieData from './movieData';
import Card from './components/cards/Cards'
import { useState } from 'react';
import Movies from './components/movies/Movies';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState(movieData)
  const [selectedMovie, setSelectedMovie] = useState(false)

  function showSelectedMovie(id) {
    const singleMovie = movieData.movies.find(movie => movie.id === id)
    setSelectedMovie(singleMovie)
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
