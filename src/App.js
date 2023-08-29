// import logo from './logo.svg';
import './App.css';
import Card from './components/cards/Cards'
import { useState, useEffect } from 'react';
import Movies from './components/movies/Movies';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import {getAllMovies, getSelectedMovieData, getVideoData} from './api';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  // const dummy = [{id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"}]
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(false)
  const [trailerKey, setTrailerKey] = useState('')

  useEffect(() => {
    getAllMovies() 
      .then(data => {
        return setMovies(data.movies)
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
      {!selectedMovie && <Movies showSelectedMovie={showSelectedMovie} movies={movies}/>}
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} showMovies={showMovies} trailerKey={trailerKey}/>}
    </div>
  );
}

export default App;
