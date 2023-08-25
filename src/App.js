// import logo from './logo.svg';
import './App.css';
import movieData from './movieData';
import Card from './components/cards/Cards'
import { useState } from 'react';
import Movies from './components/movies/Movies';

function App() {
  const [movies, setMovies] = useState(movieData)
  
  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
