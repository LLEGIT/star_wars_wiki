document.addEventListener("DOMContentLoaded", function () {

    // All links
    let link_movies = document.querySelector("#link-movies")
    let link_people = document.querySelector("#link-people")
    let link_planets = document.querySelector("#link-planets")
    let link_species = document.querySelector("#link-species")
    let link_starships = document.querySelector("#link-starships")
    let link_vehicles = document.querySelector("#link-vehicles")

    let desc_homepage_container = document.querySelector(".desc-homepage-container")

    // Movies section
    link_movies.addEventListener("click", function () {
        desc_homepage_container.remove()
        
    })

    // People section
    link_people.addEventListener("click", function () {
        desc_homepage_container.remove()
    })

    // Planets section
    link_planets.addEventListener("click", function () {
        desc_homepage_container.remove()
    })

    // Species section
    link_species.addEventListener("click", function () {
        desc_homepage_container.remove()
    })

    // Starships section
    link_starships.addEventListener("click", function () {
        desc_homepage_container.remove()
    })

    // Vehicles section
    link_vehicles.addEventListener("click", function () {
        desc_homepage_container.remove()
    })
})