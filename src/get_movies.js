import { api_key } from "./api.js";

// Retorna todos os filmes populares
export async function get_movies() {
    
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    const response = await fetch(url);
    const { results } = await response.json();
    
    return results;
}

// Retorna todos os filmes correspondentes ao nome dado
export async function search_movie(name) {
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}&language=en-US&page=1`;
    const response = await fetch(url);
    const { results } = await response.json();
    
    return results;
}