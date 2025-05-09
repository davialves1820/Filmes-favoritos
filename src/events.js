import { get_movies } from "./get_movies.js";
import { show_movie, clear_movies } from "./doom.js";
import { get_favorite_movies } from "./favorites.js";

// Exibe todos os favoritados
export function check_checkbox_status(only_favorites) {
    
    const isChecked = only_favorites.checked
    
    if (isChecked) { // Se a checkbox for clicada exibe os favoritos
        
        clear_movies()
        const movies = get_favorite_movies() || []
        movies.forEach(movie => show_movie(movie))
    } else { // Exibe os filmes populares
        
        clear_movies()
        get_all_popular_movies()
    }
}

// Exibe todos os filmes populares
export async function get_all_popular_movies() {
    
    const movies_list = await get_movies();
    movies_list.forEach(movie => show_movie(movie))
}