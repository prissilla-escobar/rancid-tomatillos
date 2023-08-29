export function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error('Movies not found.')
      }
      return response.json()
    })
}

export function getSelectedMovieData(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Movie not found.')
      }
      console.log('grabbing data')
      return response.json()
    })
}

export function getVideoData(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Trailer not found.')
    }
    return response.json()
  })    
  .then(data => data.videos.find(video => video.type === 'Trailer'))
  .then(video => video.key)
}
