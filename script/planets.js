let page = 1

document.addEventListener("DOMContentLoaded", showPlanets(page))

function showPlanets(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
    content_container.innerHTML = ""
    // Fetching every characters
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        let planets = data.results
        planets.forEach(planet => {
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                <img class="card-img-top" src="https://icon-library.com/images/planet-icon-png/planet-icon-png-21.jpg" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${planet.name}</h5>
                <p class='card-text'>Climate: ${planet.climate}</p>
                <p class='card-text'>Terrain: ${planet.terrain}</p></div></div></div>`
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function() {
    if (page < 6) {
        page += 1
        showPlanets(page)
    }
    else {
        alert("You've reached last page")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1
        showPlanets(page)
    }
    else {
        alert("You're on page 1 !")
    }
})