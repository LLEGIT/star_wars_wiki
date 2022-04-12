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
                person_image = defineIcon(person.name)
                if (person.height !== "unknown") {
                    person.height += " cm"
                }
                if (person.mass !== "unknown") {
                    person.mass += " kg"
                }
                homeworld = planet.name
                content_container.innerHTML += `<div class='col-lg-12 col-sm-12'><div class='card'>
                <img class="card-img-top" src="${person_image}" alt="Card image cap">
                <div class='card-body'>
                <h5 class='card-title'>${person.name}</h5>
                <p class='card-text'>Homeworld: ${homeworld}</p>
                <p class='card-text'>Height: ${person.height}</p>
                <p class='card-text'>Mass: ${person.mass}</p>
                <p class='card-text'>Gender: ${person.gender}</p>
                <p class='card-text'>Birth year: ${person.birth_year}</p>
                <p id='page-nb' class='card-text' hidden>${page}</p>
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

    function defineIcon(name) {
        // Page 1
        if (name === "Luke Skywalker") {
            person_image = "https://i.ibb.co/c8d15Lm/luke-skywalker-icon.jpg"
        }
        else if (name === "C-3PO") {
            person_image = "https://i.ibb.co/P10bCwj/c3po-icon.webp"
        }
        else if (name === "R2-D2") {
            person_image = "https://i.ibb.co/QpcJ2fh/r2d2-icon.jpg"
        }
        else if (name === "Darth Vader") {
            person_image = "https://i.ibb.co/55xrqm4/darth-vader-icon.jpg"
        }
        else if (name === "Leia Organa") {
            person_image = "https://i.ibb.co/KrwD6w5/leia-organa-icon.jpg"
        }
        else if (name === "Owen Lars") {
            person_image = "https://i.ibb.co/BLQLzZQ/owen-lars-icon.webp"
        }
        else if (name === "Beru Whitesun lars") {
            person_image = "https://i.ibb.co/vv7tbj1/beru-whitesun-lars-icon.jpg"
        }
        else if (name === "R5-D4") {
            person_image = "https://i.ibb.co/PmVb0pd/r5d4-icon.jpg"
        }
        else if (name === "Biggs Darklighter") {
            person_image = "https://i.ibb.co/9hcs9Rc/biggs-darklighter-icon.webp"
        }
        else if (name === "Obi-Wan Kenobi") {
            person_image = "https://i.ibb.co/Wzsr0rD/obiwan-kenobi-icon.jpg"
        }
        // Page 2
        else if (name === "Anakin Skywalker") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/8/8e/Anakin_Skywalker.png/revision/latest?cb=20160426114514"
        }
        else if (name === "Wilhuff Tarkin") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/4/4b/Wilhuff_Tarkin.jpg/revision/latest?cb=20210518143544"
        }
        else if (name === "Chewbacca") {
            person_image = "https://static.wikia.nocookie.net/lemondededisney/images/1/1d/Chewbacca.jpg/revision/latest?cb=20200506134208&path-prefix=fr"
        }
        else if (name === "Jabba Desilijic Tiure") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/3/39/Jabba_le_Hutt.png/revision/latest?cb=20170818180549"
        }
        else if (name === "Greedo") {
            person_image = "https://www.starwars-holonet.com/holonet/images/3/39/386/perso_greedo_2.jpg"
        }
        else if (name === "Han solo") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/4/48/Han_Solo.jpg/revision/latest?cb=20160514115511"
        }
        else if (name === "Jek Tono Porkins") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/e/eb/JekPorkins-DB.png"
        }
        else if (name === "Yoda") {
            person_image = "https://m.media-amazon.com/images/I/71MA6epP0WL._AC_SL1500_.jpg"
        }
        else if (name === "Palpatine") {
            person_image = "https://fr.web.img2.acsta.net/r_654_368/newsv7/21/11/18/12/23/0337867.jpg"
        }
        else if (name === "Wedge Antilles") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/e/e3/Wedge_Antilles_TROS.jpg/revision/latest?cb=20200119084500"
        }
        else if (name === "Han Solo") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/6/64/HanSolo_TFA.png/revision/latest?cb=20160111071248"
        }
        else if (name === "Boba Fett") {
            person_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Boba_Fett_-_A_Fett_to_Remember.jpg/800px-Boba_Fett_-_A_Fett_to_Remember.jpg"
        }
        else if (name === "IG-88") {
            person_image = "https://avatars.githubusercontent.com/u/41179841?v=4"
        }
        else if (name === "Bossk") {
            person_image = "https://jolstatic.fr/www/captures/2041/6/119186.jpg"
        }
        else if (name === "Lando Calrissian") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/c/c2/Lando_Calrissian.png/revision/latest?cb=20200101184241"
        }
        else if (name === "Lobot") {
            person_image = "https://www.starwars-holonet.com/holonet/images/e/e8/8509/perso_lobot_1.jpg"
        }
        else if (name === "Ackbar") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/f/fb/Ackbar_HS.jpg/revision/latest?cb=20190317063713"
        }
        else if (name === "Mon Mothma") {
            person_image = "https://static2.srcdn.com/wordpress/wp-content/uploads/2016/11/Rogue-One-A-Star-Wars-Story-Mon-Mothma-Cropped.jpg"
        }
        // If no match
        else {
            person_image = "https://via.placeholder.com/300"
        }
        return person_image
    }

    // Buttons prev and next
    document.querySelector("#next-btn").addEventListener("click", function() {
        if (page < 9) {
            showPeople(page + 1)
        }
        else {
            alert("You're on last page !")
        }
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