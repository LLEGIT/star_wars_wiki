document.addEventListener("DOMContentLoaded", showMovies())

function showMovies() {
    let content_container = document.querySelector(".content-container")
    // Getting films JSON
    fetch("https://swapi.dev/api/films")
        .then((resp) => resp.json())
        .then(function (data) {
            let movies = data.results
            let movie_image = ""
            movies.forEach(movie => {
                // Defining movie poser
                if (movie.episode_id === 1) {
                    movie_image = "media/movies_posters/epI_poster.jpg"
                }
                if (movie.episode_id === 2) {
                    movie_image = "media/movies_posters/epII_poster.jpg"
                }
                if (movie.episode_id === 3) {
                    movie_image = "media/movies_posters/epIII_poster.jpg"
                }
                if (movie.episode_id === 4) {
                    movie_image = "media/movies_posters/epIV_poster.jpg"
                }
                if (movie.episode_id === 5) {
                    movie_image = "media/movies_posters/epV_poster.jpg"
                }
                if (movie.episode_id === 6) {
                    movie_image = "media/movies_posters/epVI_poster.jpg"
                }
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
<img class="card-img-top" src="${movie_image}" alt="Card image cap">
<div class='card-body'>
<h5 class='card-title'>${movie.title}</h5>
<p class='card-text'>${movie.opening_crawl}</p>
<p class='card-text'>Director: ${movie.director}</p>
<p class='card-text'>Producer ${movie.producer}</p>
<p class='card-text'>Release date: ${movie.release_date}</p>
</div>
</div></div>`
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}