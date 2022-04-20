let page = 1

document.addEventListener("DOMContentLoaded", showSpecies(page))

function showSpecies(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
    content_container.innerHTML = ""
    // Fetching every characters
    fetch(`https://swapi.dev/api/species/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        let species = data.results
        species.forEach(specy => {
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                <img class="card-img-top" src="https://via.placeholder.com/300" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${specy.name}</h5>
                <p class='card-text'>Classification: ${specy.classification}</p>
                <p class='card-text'>Designation: ${specy.designation}</p>
                <p class='card-text'>Average height: ${specy.average_height} cm</p>
                <p class='card-text'>Average lifespan: ${specy.average_lifespan} years</p>
                <p class='card-text'>Skin colors: ${specy.skin_colors}</p>
                <p class='card-text'>Hair colors: ${specy.hair_colors}</p>
                <p class='card-text'>Eye colors: ${specy.eye_colors}</p>
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
        showSpecies(page)
    }
    else {
        alert("You've reached last page")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1
        showSpecies(page)
    }
    else {
        alert("You're on page 1 !")
    }
})