let page = 1;

document.addEventListener("DOMContentLoaded", showVehicles(page));

function showVehicles(page) {
    let page_nb = document.querySelector("#page-nb");
    page_nb.textContent = `Page ${page}`;
    let content_container = document.querySelector(".content-container");
    
    // while not fetched
    content_container.innerHTML = "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";    
    
    // Fetching every characters
    fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        content_container.innerHTML = "";    
        let vehicles = data.results;
        vehicles.forEach(vehicle => {
            vehicle_img = defineIcon(vehicle.name, page);
            content_container.innerHTML += 
            `<div class='card'>
                <div class = 'col-lg-6 col-sm-6'>
                    <img class="card-img-top" src="${vehicle_img}" alt="Card image cap">
                </div>
                <div class='col-lg-6 col-sm-6'>
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
                    </div>
                </div>
            </div>`;
        })
    })
    .catch(function (error) {
        console.log(error);
    })
}

function defineIcon(name, page) {
    const vehicleImages = {
        1: {
            "Sand Crawler": "https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png/revision/latest/scale-to-width-down/500?cb=20130812001443",
            "T-16 skyhopper": "https://static.wikia.nocookie.net/starwars/images/4/4d/T16skyhopper_negvv.png/revision/latest/scale-to-width-down/500?cb=20170411234939",
            "X-34 landspeeder": "https://static.wikia.nocookie.net/starwars/images/5/54/X34-landspeeder.jpg/revision/latest/scale-to-width-down/500?cb=20080316031428",
            "TIE/LN starfighter": "https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161109040841",
            "Snowspeeder": "https://static.wikia.nocookie.net/starwars/images/2/27/Rebel_snowspeeder_SWL.png/revision/latest/scale-to-width-down/500?cb=20190515060930",
            "TIE bomber": "https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000703",
            "AT-AT": "https://static.wikia.nocookie.net/starwars/images/1/16/AT-AT_2_Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108042721",
            "AT-ST": "https://static.wikia.nocookie.net/starwars/images/f/ff/ATST-SWBdice.png/revision/latest/scale-to-width-down/499?cb=20151110032640",
            "Storm IV Twin-Pod cloud car": "https://static.wikia.nocookie.net/starwars/images/5/51/Cloud_Car_NEGVV.png/revision/latest/scale-to-width-down/499?cb=20170410043421",
            "Sail barge": "https://static.wikia.nocookie.net/starwars/images/4/43/Sailbarge-chron1.jpg/revision/latest/scale-to-width-down/250?cb=20070401231950",
        },
        2: {
            "Bantha-II cargo skiff": "https://static.wikia.nocookie.net/starwars/images/c/cc/Bantha-II_Cargo_Skiff_BG.png/revision/latest/scale-to-width-down/500?cb=20161023211218",
            "TIE/IN interceptor": "https://static.wikia.nocookie.net/starwars/images/6/65/Tieinter2.jpg/revision/latest/scale-to-width-down/500?cb=20060705184051",
            "Imperial Speeder Bike": "https://static.wikia.nocookie.net/starwars/images/2/26/Stormspeader.jpg/revision/latest/scale-to-width-down/500?cb=20210405183809",
            "Vulture Droid": "https://static.wikia.nocookie.net/starwars/images/4/40/Droid_Starfighters.png/revision/latest/scale-to-width-down/500?cb=20190221162538",
            "Multi-Troop Transport": "https://static.wikia.nocookie.net/starwars/images/a/ab/MTT_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000638",
            "Armored Assault Tank": "https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000703",
            "Single Trooper Aerial Platform": "https://static.wikia.nocookie.net/starwars/images/c/ce/STAP-SWE.png/revision/latest/scale-to-width-down/250?cb=20160914004451",
            "C-9979 landing craft": "https://static.wikia.nocookie.net/starwars/images/f/f0/C9979_ep1ig.jpg/revision/latest/scale-to-width-down/500?cb=20120226042037",
            "Tribubble bongo": "https://static.wikia.nocookie.net/starwars/images/d/d8/Bongo.jpg/revision/latest/scale-to-width-down/500?cb=20080430201913",
            "Sith speeder": "https://static.wikia.nocookie.net/starwars/images/6/6f/FC20_speeder_bike_SWFFfb.png/revision/latest/scale-to-width-down/500?cb=20151027003855",
        },
        3: {
            "Zephyr-G swoop bike": "https://static.wikia.nocookie.net/starwars/images/2/21/Anakin_looking_dramatic.png/revision/latest/scale-to-width-down/500?cb=20200111225331",
            "Koro-2 Exodrive airspeeder": "https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg/revision/latest/scale-to-width-down/500?cb=20130519005132",
            "XJ-6 airspeeder": "https://static.wikia.nocookie.net/starwars/images/f/f6/XJ-6_hotrod.jpg/revision/latest/scale-to-width-down/500?cb=20080218042929",
            "LAAT/i": "https://static.wikia.nocookie.net/starwars/images/c/c5/Low_Altitude_Assault_Transport.png/revision/latest/scale-to-width-down/500?cb=20130719130715",
            "LAAT/c": "https://static.wikia.nocookie.net/starwars/images/6/63/LAATc_USW.png/revision/latest/scale-to-width-down/499?cb=20190116012930",
            "AT-TE": "https://static.wikia.nocookie.net/starwars/images/6/6f/ATTE-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111114010557",
            "SPHA": "https://static.wikia.nocookie.net/starwars/images/5/5f/SPHA-T.jpg/revision/latest/scale-to-width-down/500?cb=20060515020703",
            "Flitknot speeder": "https://static.wikia.nocookie.net/starwars/images/8/82/Separatist_speeder.jpg/revision/latest/scale-to-width-down/498?cb=20160118062514",
            "Neimoidian shuttle": "https://static.wikia.nocookie.net/starwars/images/f/f4/KrakenMaxillipedeShuttle.jpg/revision/latest/scale-to-width-down/500?cb=20150904052612",
            "Geonosian starfighter": "https://static.wikia.nocookie.net/starwars/images/f/fa/Nantex_NEGVV.png/revision/latest/scale-to-width-down/500?cb=20170411042233",
        },
        4: {
            "Tsmeu-6 personal wheel bike": "https://static.wikia.nocookie.net/starwars/images/2/2c/GrievWheelBike_wsmi.jpg/revision/latest/scale-to-width-down/500?cb=20071215145011",
            "Emergency Firespeeder": "https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg/revision/latest/scale-to-width-down/500?cb=20130519005132",
            "Droid tri-fighter": "https://static.wikia.nocookie.net/starwars/images/a/af/Tri-fighter.jpg/revision/latest/scale-to-width-down/350?cb=20080421033320",
            "Oevvaor jet catamaran": "https://static.wikia.nocookie.net/starwars/images/0/03/Wookieeflyingcat2.png/revision/latest/scale-to-width-down/500?cb=20130202035458",
            "Raddaugh Gnasp fluttercraft": "https://static.wikia.nocookie.net/starwars/images/d/dc/Catamaran.jpg/revision/latest/scale-to-width-down/500?cb=20071030194931",
            "Clone turbo tank": "https://static.wikia.nocookie.net/starwars/images/f/f7/JuggernautROTS.jpg/revision/latest/scale-to-width-down/250?cb=20091201162123",
            "Corporate Alliance tank droid": "https://static.wikia.nocookie.net/starwars/images/7/73/Tank_droid_TCW.png/revision/latest/scale-to-width-down/500?cb=20170703051940",
            "Droid gunship": "https://static.wikia.nocookie.net/starwars/images/6/6d/DroidGunship-DB.png/revision/latest/scale-to-width-down/500?cb=20141227052202",
            "AT-RT": "https://static.wikia.nocookie.net/starwars/images/5/5c/AT-RT_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000646",
        },
    };

    return vehicleImages[page][name] || "default_image_url";
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function() {
    if (page < 4) {
        page += 1;
        showVehicles(page);
    }
    else {
        alert("You've reached last page");
    }
});

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1;
        showVehicles(page);
    }
    else {
        alert("You're on page 1 !");
    }
});