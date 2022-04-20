let page = 1

document.addEventListener("DOMContentLoaded", showStarships(page))

function showStarships(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
    content_container.innerHTML = ""
    // Fetching every characters
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        let starships = data.results
        starships.forEach(starship => {
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                <img class="card-img-top" src="https://via.placeholder.com/300" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${starship.name}</h5>
                <p class='card-text'>Model: ${starship.model}</p>
                <p class='card-text'>Class: ${starship.starship_class}</p>
                <p class='card-text'>Manufacturer: ${starship.manufacturer}</p>
                <p class='card-text'>Cost in credits: ${starship.cost_in_credits} credits</p>
                <p class='card-text'>Length: ${starship.length} m</p>
                <p class='card-text'>Max atmosphering speed: ${starship.max_atmosphering_speed}</p>
                <p class='card-text'>Crew: ${starship.crew} persons</p>
                <p class='card-text'>Passengers: ${starship.passengers} passengers</p>
                </div></div></div>`
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}

 // Buttons prev and next
 document.querySelector("#next-btn").addEventListener("click", function() {
    if (page < 4) {
        page += 1
        showStarships(page)
    }
    else {
        alert("You've reached last page")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1
        showStarships(page)
    }
    else {
        alert("You're on page 1 !")
    }
})