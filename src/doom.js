import { check_movie_is_favorited, save_to_local_storage, remove_from_local_storage } from './favorites.js';

export const movies = document.getElementById("movies");

// Limpar a tela
export function clear_movies() {
    movies.innerHTML = "";
}

// Função executada a cada click no botão de favoritar
export function favorite_button_pressed(event, movie) {

    // Objeto para facilitar a troca da imagem do coração
    const favoriteState = {
        favorited: 'img/heart-fill.svg',
        notFavorited: 'img/heart.svg'
    }

    // Caso o filme não esteja favoritado
    if(event.target.src.includes(favoriteState.notFavorited)) {

        event.target.src = favoriteState.favorited
        save_to_local_storage(movie)
    } else { // Caso ele esteja

        event.target.src = favoriteState.notFavorited
        remove_from_local_storage(movie.id)
    }
}

// Exibe o filme
export function show_movie(search) {

    const {id, title, poster_path, vote_average, release_date, overview} = search;
    const favorite = check_movie_is_favorited(id);
    
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`

    const movie_picture = document.createElement("img");
    movie_picture.src = image;
    
    const movie_img = document.createElement("div");
    movie_img.appendChild(movie_picture);
    movie_img.classList.add("movie-image");

    const h4 = document.createElement("h4");
    h4.textContent = `${title} (${release_date})`;

    const rating_img = document.createElement("img");
    rating_img.src = "./img/star.png";

    const rating_span = document.createElement("span");
    rating_span.textContent = vote_average.toFixed(1);

    const rating = document.createElement("div");
    rating.appendChild(rating_img);
    rating.appendChild(rating_span);
    rating.classList.add("rating");

    const favorites_img = document.createElement("img");
    favorites_img.src = favorite ? 'img/heart-fill.svg' : 'img/heart.svg'
    favorites_img.addEventListener("click", (event) => favorite_button_pressed (event, search))

    const favorites_span = document.createElement("span");
    favorites_span.textContent = "Favoritar";

    const favorites = document.createElement("div");
    favorites.appendChild(favorites_img);
    favorites.appendChild(favorites_span);
    favorites.classList.add("favorite");

    const rating_favorites = document.createElement("div");
    rating_favorites.appendChild(rating);
    rating_favorites.appendChild(favorites);
    rating_favorites.classList.add("rating-favorites");

    const movie_text = document.createElement("div");
    movie_text.appendChild(h4);
    movie_text.appendChild(rating_favorites);
    movie_text.classList.add("movie-text");

    const description_span = document.createElement("span");
    description_span.textContent = overview;
    
    const movie_description = document.createElement("div");
    movie_description.classList.add("movie-description");
    movie_description.appendChild(description_span);

    const movie_information = document.createElement("div");
    movie_information.appendChild(movie_img);
    movie_information.classList.add("movie-informations");
    movie_information.appendChild(movie_text);
    
    const movie = document.createElement("div");
    movie.appendChild(movie_information);
    movie.classList.add("movie");
    movie.appendChild(movie_description);
    
    movies.appendChild(movie);
}