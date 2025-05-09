import { get_all_popular_movies, check_checkbox_status } from "./events.js";
import { show_search } from "./search.js";

const movie_name = document.getElementById("movie-name");
const only_favorites = document.getElementById("onlyFavorites");

// Adiciona eventos na barra de pesquisa e no input checkbox
movie_name.addEventListener("keyup", (event) => show_search(event, movie_name));
only_favorites.addEventListener("change", () => check_checkbox_status(only_favorites));

// Chama a função para exibir todos os filmes populares assim que entra na página
window.onload = () => {
    get_all_popular_movies();
}; 

