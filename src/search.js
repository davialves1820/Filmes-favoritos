import { search_movie } from './get_movies.js';
import { clear_movies, show_movie } from './doom.js';

// Pesquisa um filme a partir do nome
export async function show_search(event, movie_name) {

    // Verifica se foi pressionada a tecla enter
    if (event.keyCode == 13) {
        const name = movie_name.value.toLowerCase();
    
        if (!name) {
            return;
        } 
        
        clear_movies();
        const movie_list = await search_movie(name); 
        movie_name.value = "";
        
        if (movie_list) {
            movie_list.forEach(movie => show_movie(movie)); 
        }
    }
    
}
