document.addEventListener("DOMContentLoaded", showMovies());

function showMovies() {
    let content_container = document.querySelector(".content-container");
    let moviesPoster = [
        "https://i.ibb.co/vsbyHfC/ep-I-poster.jpg",
        "https://i.ibb.co/ZNM02rc/ep-II-poster.jpg",
        "https://i.ibb.co/hsx4PwW/ep-III-poster.jpg",
        "https://i.ibb.co/TqmKZpx/ep-IV-poster.jpg",
        "https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/499?cb=20161114072554",
        "https://i.ibb.co/6byn7R9/ep-VI-poster.jpg"
    ];

    // While movies not fetched
    content_container.innerHTML = "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

    // Getting films JSON
    fetch("https://swapi.dev/api/films")
        .then((response) => response.json())
        .then(function (data) {
            // Empty the view
            content_container.innerHTML = "";
            let movies = data.results;
            let movie_image = "";
            movies.forEach((movie, index) => {
                // Defining movie poser
                movie_image = moviesPoster[index];

                content_container.innerHTML += 
                `<div class='card'>
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
                    </div>
                </div>`;
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}