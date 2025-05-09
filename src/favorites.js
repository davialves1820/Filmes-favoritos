
// Retorna todos os filmes que foram salvos como favoritos
export function get_favorite_movies() {
    return JSON.parse(localStorage.getItem('favoriteMovies'))
}

// Salva o filme favoritado no local storage
export function save_to_local_storage(movie) {

    const movies = get_favorite_movies() || []
    movies.push(movie)
    
    const moviesJSON = JSON.stringify(movies)
    localStorage.setItem('favoriteMovies', moviesJSON)
}

// Verifica se um fulme está marcado como favorito
export function check_movie_is_favorited(id) {

    const movies = get_favorite_movies() || []
    
    return movies.find(movie => movie.id == id)
}

// Remove o filme do local storage
export function remove_from_local_storage(id) {

    const movies = get_favorite_movies() || []
    const newMovies = movies.filter(movie => movie.id != id)
    localStorage.setItem('favoriteMovies', JSON.stringify(newMovies))
}