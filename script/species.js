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
                specy_img = defineIcon(specy.name, page)
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
<img class="card-img-top" src="${specy_img}" alt="Card image cap">
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

function defineIcon(name, page) {
    // Page 1
    if (page === 1) {
        if (name === "Human") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/5/5d/Humans-TESB30.jpg/revision/latest/scale-to-width-down/500?cb=20100628191857"
        }
        else if (name === "Droid") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/c/c8/Counterparts.jpg/revision/latest/scale-to-width-down/250?cb=20070608122549"
        }
        else if (name === "Wookie") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108052810"
        }
        else if (name === "Rodian") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/2/23/Rodian_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20061127015745"
        }
        else if (name === "Hutt") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/a/a7/HuttNEGAS.png/revision/latest/scale-to-width-down/500?cb=20130115030417"
        }
        else if (name === "Yoda's species") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/c/c3/Yoda_TPM_RotS.png/revision/latest/scale-to-width-down/500?cb=20130810185858"
        }
        else if (name === "Trandoshan") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/4/45/Trandoshan_NEGAS.png/revision/latest/scale-to-width-down/500?cb=20130115031110"
        }
        else if (name === "Mon Calamari") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/7/77/Mon_Calamari_NEGAS.jpg/revision/latest/scale-to-width-down/350?cb=20170926052257"
        }
        else if (name === "Ewok") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/8/82/EwokNEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20061126065723"
        }
        else if (name === "Sullustan") {
            specy_img = "https://static.wikia.nocookie.net/starwars/images/f/f5/Sullustan_NEGAS.jpg/revision/latest?cb=20100810063353"
        }
    }
    return specy_img
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function () {
    if (page < 4) {
        page += 1
        showSpecies(page)
    }
    else {
        alert("You've reached last page")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function () {
    if (page > 1) {
        page -= 1
        showSpecies(page)
    }
    else {
        alert("You're on page 1 !")
    }
})