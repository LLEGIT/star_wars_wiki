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
                    movie_image = "https://i.ibb.co/vsbyHfC/ep-I-poster.jpg"
                }
                if (movie.episode_id === 2) {
                    movie_image = "https://i.ibb.co/ZNM02rc/ep-II-poster.jpg"
                }
                if (movie.episode_id === 3) {
                    movie_image = "https://i.ibb.co/hsx4PwW/ep-III-poster.jpg"
                }
                if (movie.episode_id === 4) {
                    movie_image = "https://i.ibb.co/TqmKZpx/ep-IV-poster.jpg"
                }
                if (movie.episode_id === 5) {
                    movie_image = "https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/499?cb=20161114072554"
                }
                if (movie.episode_id === 6) {
                    movie_image = "https://i.ibb.co/6byn7R9/ep-VI-poster.jpg"
                }
                content_container.innerHTML += `<div class='card'>
                <div class='col-lg-3 col-sm-3 col-xs-6'>
<img class="card-img-top" src="${movie_image}" alt="Card image cap">
                </div>
                <div class = 'col-lg-9 col-sm-9 col-xs-6'>
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