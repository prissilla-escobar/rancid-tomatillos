import './SelectedMovie.css'
import SelectedMovieCard from './SelectedMovieCard'

function SelectedMovie({selectedMovie}) {
    // console.log('SELMOVIE', selectedMovie)
   return (
    <div className='single-movie-container'>
       <SelectedMovieCard 
        key={selectedMovie.id}
        id={selectedMovie.id}
        title={selectedMovie.title}
        poster_path={selectedMovie.poster_path}
        rating={selectedMovie.average_rating}
        release_date={selectedMovie.release_date}
        backdrop_path={selectedMovie.backdrop_path}
        average_rating={selectedMovie.average_rating}
        genres={selectedMovie.genres}
        runtime={selectedMovie.runtime}
        overview={selectedMovie.overview}
        // goBack={goBack}
        // displayVideo={displayVideo}
      />
    </div>
   )
}

export default SelectedMovie