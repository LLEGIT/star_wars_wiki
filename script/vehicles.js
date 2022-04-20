let page = 1

document.addEventListener("DOMContentLoaded", showVehicles(page))

function showVehicles(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
    content_container.innerHTML = ""
    // Fetching every characters
    fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        let vehicles = data.results
        vehicles.forEach(vehicles => {
            vehicle_img = "https://cdn0.iconfinder.com/data/icons/star-wars/33/at-at-512.png"
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                <img class="card-img-top" src="${vehicle_img}" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${vehicles.name}</h5>
                <p class='card-text'>Model: ${vehicles.model}</p>
                <p class='card-text'>Class: ${vehicles.vehicle_class}</p>
                <p class='card-text'>Manufacturer: ${vehicles.manufacturer}</p>
                <p class='card-text'>Cost in credits: ${vehicles.cost_in_credits} credits</p>
                <p class='card-text'>Length: ${vehicles.length} m</p>
                <p class='card-text'>Max atmosphering speed: ${vehicles.max_atmosphering_speed}</p>
                <p class='card-text'>Crew: ${vehicles.crew} persons</p>
                <p class='card-text'>Passengers: ${vehicles.passengers} passengers</p>
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
        showVehicles(page)
    }
    else {
        alert("You've reached last page")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1
        showVehicles(page)
    }
    else {
        alert("You're on page 1 !")
    }
})