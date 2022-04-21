let page = 1
let starship_img = ""

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
            starship_img = defineIcon(starship.name, page)
                content_container.innerHTML += `<div class='card'><div class = 'col-lg-6 col-sm-6'>
                <img class="card-img-top" src="${starship_img}" alt="Card image cap"></div><div class='col-lg-6 col-sm-6'>
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

function defineIcon(name, page) {
    // Page 1
    if (page === 1) {
        if (name === "CR90 corvette") {
            starship_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIB8O163IWYnLSDQtG2V2blaIlOjYbuEcksA&usqp=CAU"
        }
        else if (name === "Star Destroyer") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/e/e4/ImperialClassStarDestroyer-TSWB.png/revision/latest/scale-to-width-down/350?cb=20201021091456"
        }
        else if (name === "Sentinel-class landing craft") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/6/6e/Sentinel_negvv.png/revision/latest/scale-to-width-down/499?cb=20170411232732"
        }
        else if (name === "Death Star") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest/scale-to-width-down/500?cb=20130221005853"
        }
        else if (name === "Millennium Falcon") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/dc/Melfal.jpg/revision/latest/scale-to-width-down/500?cb=20070507224007"
        }
        else if (name === "Y-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/7/79/Y-Wing.png/revision/latest/scale-to-width-down/350?cb=20161110200708"
        }
        else if (name === "X-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/4/41/X-Wing_T-70.png/revision/latest/scale-to-width-down/350?cb=20160716125326"
        }
        else if (name === "TIE Advanced x1") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/1/1e/TIE_x1_avanc%C3%A9.png/revision/latest/scale-to-width-down/350?cb=20161005121333"
        }
        else if (name === "Executor") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/d/d9/Executor.jpg/revision/latest/scale-to-width-down/350?cb=20150315090943"
        }
        else if (name === "Rebel transport") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/2/2e/AllianceTransport.png/revision/latest/scale-to-width-down/350?cb=20210702062826"
        }
        }
    return starship_img
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