let page = 1

document.addEventListener("DOMContentLoaded", showPeople(page))

function showPeople(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
    content_container.innerHTML = ""
    // Fetching every characters
    fetch(`https://swapi.dev/api/people/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        let people = data.results
        people.forEach(person => {
            fetch(person.homeworld)
            .then((resp) => resp.json())
            .then(function (planet) {
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
            .catch(function (error) {
                console.log(error)
            })
        })
    })
    .catch(function (error) {
        console.log(error)
    })

    // Buttons prev and next
    document.querySelector("#next-btn").addEventListener("click", function() {
        page += 1
        showPeople(page)
    })

    document.querySelector("#prev-btn").addEventListener("click", function() {
        if (page > 1) {
            showPeople(page - 1)
        }
        else {
            alert("You're on page 1 !")
        }
    })
}