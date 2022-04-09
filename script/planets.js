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
                <img class="card-img-top" src="https://via.placeholder.com/300" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${planet.name}</h5>
                <p class='card-text'>Climate: ${planet.climate}</p>
                <p class='card-text'>Terrain: ${planet.terrain}</p>`

                // Linking every populations on the planet
                planet.residents.forEach(resident => {
                    fetch(resident)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        console.log(data)
                        content_container.innerHTML += `<p class='card-text'>Residents: ${data.name} `
                    })
                })
                content_container.innerHTML += "</p></div></div></div>"
        })
    })
    .catch(function (error) {
        console.log(error)
    })

    // Buttons prev and next
    document.querySelector("#next-btn").addEventListener("click", function() {
        page += 1
        showPlanets(page)
    })

    document.querySelector("#prev-btn").addEventListener("click", function() {
        if (page !== 1) {
            page -= 1
            showPlanets(page)
        }
    })
}