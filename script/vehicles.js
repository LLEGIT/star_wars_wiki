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
        vehicles.forEach(vehicle => {
            vehicle_img = defineIcon(vehicle.name, page)
                content_container.innerHTML += `<div class='card'>
                <div class='col-lg-8 col-sm-8'>
                <img class="card-img-top" src="${vehicle_img}" alt="Card image cap">
                </div>
                <div class = 'col-lg-4 col-sm-4'>
                <div class='card-body'>
                <h5 class='card-title'>${vehicle.name}</h5>
                <p class='card-text'>Model: ${vehicle.model}</p>
                <p class='card-text'>Class: ${vehicle.vehicle_class}</p>
                <p class='card-text'>Manufacturer: ${vehicle.manufacturer}</p>
                <p class='card-text'>Cost in credits: ${vehicle.cost_in_credits} credits</p>
                <p class='card-text'>Length: ${vehicle.length} m</p>
                <p class='card-text'>Max atmosphering speed: ${vehicle.max_atmosphering_speed}</p>
                <p class='card-text'>Crew: ${vehicle.crew} persons</p>
                <p class='card-text'>Passengers: ${vehicle.passengers} passengers</p>
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
        if (name === "Sand Crawler") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png/revision/latest/scale-to-width-down/500?cb=20130812001443"
        }
        else if (name === "T-16 skyhopper") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/4/4d/T16skyhopper_negvv.png/revision/latest/scale-to-width-down/500?cb=20170411234939"
        }
        else if (name === "X-34 landspeeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/5/54/X34-landspeeder.jpg/revision/latest/scale-to-width-down/500?cb=20080316031428"
        }
        else if (name === "TIE/LN starfighter") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161109040841"
        }
        else if (name === "Snowspeeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/27/Rebel_snowspeeder_SWL.png/revision/latest/scale-to-width-down/500?cb=20190515060930"
        }
        else if (name === "TIE bomber") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000703"
        }
        else if (name === "AT-AT") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/1/16/AT-AT_2_Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108042721"
        }
        else if (name === "AT-ST") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/ff/ATST-SWBdice.png/revision/latest/scale-to-width-down/499?cb=20151110032640"
        }
        else if (name === "Storm IV Twin-Pod cloud car") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/5/51/Cloud_Car_NEGVV.png/revision/latest/scale-to-width-down/499?cb=20170410043421"
        }
        else if (name === "Sail barge") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/4/43/Sailbarge-chron1.jpg/revision/latest/scale-to-width-down/250?cb=20070401231950"
        }
    }
    // Page 2
    else if (page === 2) {
        if (name === "Bantha-II cargo skiff") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/c/cc/Bantha-II_Cargo_Skiff_BG.png/revision/latest/scale-to-width-down/500?cb=20161023211218"
        }
        else if (name === "TIE/IN interceptor") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/6/65/Tieinter2.jpg/revision/latest/scale-to-width-down/500?cb=20060705184051"
        }
        else if (name === "Imperial Speeder Bike") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/26/Stormspeader.jpg/revision/latest/scale-to-width-down/500?cb=20210405183809"
        }
        else if (name === "Vulture Droid") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/4/40/Droid_Starfighters.png/revision/latest/scale-to-width-down/500?cb=20190221162538"
        }
        else if (name === "Multi-Troop Transport") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/a/ab/MTT_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000638"
        }
        else if (name === "Armored Assault Tank") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000703"
        }
        else if (name === "Single Trooper Aerial Platform") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/c/ce/STAP-SWE.png/revision/latest/scale-to-width-down/250?cb=20160914004451"
        }
        else if (name === "C-9979 landing craft") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/f0/C9979_ep1ig.jpg/revision/latest/scale-to-width-down/500?cb=20120226042037"
        }
        else if (name === "Tribubble bongo") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/d/d8/Bongo.jpg/revision/latest/scale-to-width-down/500?cb=20080430201913"
        }
        else if (name === "Sith speeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/6/6f/FC20_speeder_bike_SWFFfb.png/revision/latest/scale-to-width-down/500?cb=20151027003855"
        }
    }
    // Page 3
    else if (page === 3) {
        if (name === "Zephyr-G swoop bike") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/21/Anakin_looking_dramatic.png/revision/latest/scale-to-width-down/500?cb=20200111225331"
        }
        else if (name === "Koro-2 Exodrive airspeeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg/revision/latest/scale-to-width-down/500?cb=20130519005132"
        }
        else if (name === "XJ-6 airspeeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/f6/XJ-6_hotrod.jpg/revision/latest/scale-to-width-down/500?cb=20080218042929"
        }
        else if (name === "LAAT/i") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/c/c5/Low_Altitude_Assault_Transport.png/revision/latest/scale-to-width-down/500?cb=20130719130715"
        }
        else if (name === "LAAT/c") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/6/63/LAATc_USW.png/revision/latest/scale-to-width-down/499?cb=20190116012930"
        }
        else if (name === "AT-TE") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/6/6f/ATTE-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111114010557"
        }
        else if (name === "SPHA") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/5/5f/SPHA-T.jpg/revision/latest/scale-to-width-down/500?cb=20060515020703"
        }
        else if (name === "Flitknot speeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/8/82/Separatist_speeder.jpg/revision/latest/scale-to-width-down/498?cb=20160118062514"
        }
        else if (name === "Neimoidian shuttle") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/f4/KrakenMaxillipedeShuttle.jpg/revision/latest/scale-to-width-down/500?cb=20150904052612"
        }
        else if (name === "Geonosian starfighter") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/fa/Nantex_NEGVV.png/revision/latest/scale-to-width-down/500?cb=20170411042233"
        }
    }
     // Page 4
     else if (page === 4) {
        if (name === "Tsmeu-6 personal wheel bike") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/2c/GrievWheelBike_wsmi.jpg/revision/latest/scale-to-width-down/500?cb=20071215145011"
        }
        else if (name === "Emergency Firespeeder") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg/revision/latest/scale-to-width-down/500?cb=20130519005132"
        }
        else if (name === "Droid tri-fighter") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/a/af/Tri-fighter.jpg/revision/latest/scale-to-width-down/350?cb=20080421033320"
        }
        else if (name === "Oevvaor jet catamaran") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/0/03/Wookieeflyingcat2.png/revision/latest/scale-to-width-down/500?cb=20130202035458"
        }
        else if (name === "Raddaugh Gnasp fluttercraft") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/d/dc/Catamaran.jpg/revision/latest/scale-to-width-down/500?cb=20071030194931"
        }
        else if (name === "Clone turbo tank") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/f/f7/JuggernautROTS.jpg/revision/latest/scale-to-width-down/250?cb=20091201162123"
        }
        else if (name === "Corporate Alliance tank droid") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/7/73/Tank_droid_TCW.png/revision/latest/scale-to-width-down/500?cb=20170703051940"
        }
        else if (name === "Droid gunship") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/6/6d/DroidGunship-DB.png/revision/latest/scale-to-width-down/500?cb=20141227052202"
        }
        else if (name === "AT-RT") {
            vehicle_img = "https://static.wikia.nocookie.net/starwars/images/5/5c/AT-RT_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000646"
        }
    }
    return vehicle_img
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