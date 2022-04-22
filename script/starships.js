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
    // Page 2
    else if (page === 2) {
        if (name === "Slave 1") {
            starship_img = "https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/avatars_v6/slave_avv6.jpg"
        }
        else if (name === "Imperial shuttle") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png/revision/latest?cb=20150920051331"
        }
        else if (name === "EF76 Nebulon-B escort frigate") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/7/71/NebulonB-SWS.png/revision/latest/scale-to-width-down/500?cb=20210303023412"
        }
        else if (name === "Calamari Cruiser") {
            starship_img = "https://static.turbosquid.com/Preview/2020/09/12__05_01_46/moncalcruiser.jpgC4F94E83-2287-4E23-BB30-322C7E885F99Large.jpg"
        }
        else if (name === "A-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/2/23/A-Wing.jpg/revision/latest?cb=20161103093004"
        }
        else if (name === "B-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/7/71/BWingsKillISD2-ST.jpg/revision/latest?cb=20160604124644"
        }
        else if (name === "Republic Cruiser") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/dd/Republic_Frigate.png/revision/latest/scale-to-width-down/225?cb=20140409150934"
        }
        else if (name === "Droid control ship") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/95/Lucrehulk_battleship_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311015214"
        }
        else if (name === "Naboo fighter") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/6/64/N-1_Starfighter.png/revision/latest/scale-to-width-down/500?cb=20130619201428"
        }
        else if (name === "Naboo Royal Starship") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/9e/Naboo_Royal_Starship.png/revision/latest/scale-to-width-down/500?cb=20161019065403"
        }
    }
    // Page 2
    else if (page === 2) {
        if (name === "Slave 1") {
            starship_img = "https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/avatars_v6/slave_avv6.jpg"
        }
        else if (name === "Imperial shuttle") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png/revision/latest?cb=20150920051331"
        }
        else if (name === "EF76 Nebulon-B escort frigate") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/7/71/NebulonB-SWS.png/revision/latest/scale-to-width-down/500?cb=20210303023412"
        }
        else if (name === "Calamari Cruiser") {
            starship_img = "https://static.turbosquid.com/Preview/2020/09/12__05_01_46/moncalcruiser.jpgC4F94E83-2287-4E23-BB30-322C7E885F99Large.jpg"
        }
        else if (name === "A-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/2/23/A-Wing.jpg/revision/latest?cb=20161103093004"
        }
        else if (name === "B-wing") {
            starship_img = "https://static.wikia.nocookie.net/frstarwars/images/7/71/BWingsKillISD2-ST.jpg/revision/latest?cb=20160604124644"
        }
        else if (name === "Republic Cruiser") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/dd/Republic_Frigate.png/revision/latest/scale-to-width-down/225?cb=20140409150934"
        }
        else if (name === "Droid control ship") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/95/Lucrehulk_battleship_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311015214"
        }
        else if (name === "Naboo fighter") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/6/64/N-1_Starfighter.png/revision/latest/scale-to-width-down/500?cb=20130619201428"
        }
        else if (name === "Naboo Royal Starship") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/9e/Naboo_Royal_Starship.png/revision/latest/scale-to-width-down/500?cb=20161019065403"
        }
    }
    // Page 3
    else if (page === 3) {
        if (name === "Scimitar") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/1/12/Sithinfiltrator-NEGVV.png/revision/latest/scale-to-width-down/500?cb=20170411032807"
        }
        else if (name === "J-type diplomatic barge") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/1/1c/J-type_Diplomatic_Barge_TCW.png/revision/latest/scale-to-width-down/500?cb=20160903222638"
        }
        else if (name === "AA-9 Coruscant freighter") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/c/c7/Aa9coruscantfreighter.jpg/revision/latest/scale-to-width-down/500?cb=20091201131352"
        }
        else if (name === "Jedi starfighter") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/7/7a/Jsf_duo2.jpg/revision/latest/scale-to-width-down/150?cb=20060706121723"
        }
        else if (name === "H-type Nubian yacht") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/8/87/H-Type_Nubian_yacht_USW.png/revision/latest/scale-to-width-down/500?cb=20190116010226"
        }
        else if (name === "Republic Assault ship") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/8/84/Acclamator-OCF.jpg/revision/latest/scale-to-width-down/500?cb=20091003023542"
        }
        else if (name === "Solar Sailer") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/d/dd/Republic_Frigate.png/revision/latest/scale-to-width-down/225?cb=20140409150934"
        }
        else if (name === "Trade Federation cruiser") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/9/95/Lucrehulk_battleship_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311015214"
        }
        else if (name === "Theta-class T-2c shuttle") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/4/41/Solar_sail.jpg/revision/latest/scale-to-width-down/250?cb=20090623121923"
        }
        else if (name === "Republic attack cruiser") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/e/ec/Venator_clonewars.jpg/revision/latest/scale-to-width-down/500?cb=20110918171254"
        }
    }
    // Page 4
    else if (page === 4) {
        if (name === "Naboo star skiff") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/0/08/Nabooskiff2-chron.jpg/revision/latest/scale-to-width-down/350?cb=20070922232853"
        }
        else if (name === "Jedi Interceptor") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/a/a6/Eta-2_Interceptor.png/revision/latest/scale-to-width-down/350?cb=20130613124413"
        }
        else if (name === "arc-170") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/b/ba/ARC170starfighter.jpg/revision/latest/scale-to-width-down/500?cb=20111112062600"
        }
        else if (name === "Banking clan frigte") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/0/07/Munificent_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311013715"
        }
        else if (name === "Belbullab-22 starfighter") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/3/3e/Soulless_One2_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311020627"
        }
        else if (name === "V-wing") {
            starship_img = "https://static.wikia.nocookie.net/starwars/images/6/66/Nimbus-class_V-wing_TFOWM.png/revision/latest/scale-to-width-down/250?cb=20190629212809"
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