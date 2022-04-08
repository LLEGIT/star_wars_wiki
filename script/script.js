document.addEventListener("DOMContentLoaded", function () {

    // All links
    let link_movies = document.querySelector("#link-movies")
    let link_people = document.querySelector("#link-people")
    let link_planets = document.querySelector("#link-planets")
    let link_species = document.querySelector("#link-species")
    let link_starships = document.querySelector("#link-starships")
    let link_vehicles = document.querySelector("#link-vehicles")

    let desc_homepage_container = document.querySelector(".desc-homepage-container")
    let content_container = document.querySelector(".content-container")

    // Movies section
    link_movies.addEventListener("click", function () {
        showMovies()
    })

    // People section
    link_people.addEventListener("click", function () {
        showPeople(1)
        // Nav arrows
    })

    // Planets section
    link_planets.addEventListener("click", function () {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
    })

    // Species section
    link_species.addEventListener("click", function () {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
    })

    // Starships section
    link_starships.addEventListener("click", function () {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
    })

    // Vehicles section
    link_vehicles.addEventListener("click", function () {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
    })

    function showMovies() {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
        // Getting films JSON
        fetch("https://swapi.dev/api/films")
        .then((resp) => resp.json())
        .then(function(data) {
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
        .catch(function(error) {
            console.log(error)
        })
    }

    function showPeople(page) {
        desc_homepage_container.remove()
        content_container.innerHTML = ""
        // Fetching every characters
        fetch (`https://swapi.dev/api/people/?page=${page}`)
        .then((resp) => resp.json())
        .then(function(data) {
            let next = data.next
            let people = data.results
            people.forEach(person => {
                fetch(person.homeworld)
                .then((resp) => resp.json())
                .then(function(planet) {
                    // Defining icon according to the character
                    switch (person.name) {
                        case "Luke Skywalker":
                            person_image = "media/characters_icon/luke_skywalker_icon.jpg"
                            break
                        case "C-3PO":
                            person_image = "media/characters_icon/c3po_icon.webp"
                            break
                        case "R2-D2":
                            person_image = "media/characters_icon/r2d2_icon.jpg"
                            break
                        case "Darth Vader":
                            person_image = "media/characters_icon/darth_vader_icon.jpg"
                            break
                        case "Leia Organa":
                            person_image = "media/characters_icon/leia_organa_icon.jpg"
                            break
                        case "Owen Lars":
                            person_image = "media/characters_icon/owen_lars_icon.webp"
                            break
                        case "Beru Whitesun lars":
                            person_image = "media/characters_icon/beru_whitesun_lars_icon.jpg"
                            break
                        case "R5-D4":
                            person_image = "media/characters_icon/r5d4_icon.jpg"
                            break
                        case "Biggs Darklighter":
                            person_image = "media/characters_icon/biggs_darklighter_icon.webp"
                            break
                        case "Obi-Wan Kenobi":
                            person_image = "media/characters_icon/obiwan_kenobi_icon.jpg"
                            break
                        default:
                            person_image = "https://via.placeholder.com/300"
                            break
                    }
                    homeworld = planet.name
                    content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                    <img class="card-img-top" src="${person_image}" alt="Card image cap">
                    <div class='card-body'>
                    <h5 class='card-title'>${person.name}</h5>
                    <p class='card-text'>Homeworld: ${homeworld}</p>
                    <p class='card-text'>Height: ${person.height} cm</p>
                    <p class='card-text'>Mass: ${person.mass} kg</p>
                    <p class='card-text'>Gender: ${person.gender}</p>
                    <p class='card-text'>Birth year: ${person.birth_year}</p>
                    </div></div></div>`
                })
                .catch(function(error) {
                    console.log(error)
                })
            })

            // Creating previous and next buttons
            
        })
        .catch(function(error) {
            console.log(error)
        })
    }
})