let page = 1;
document.addEventListener("DOMContentLoaded", showSpecies(page));

function showSpecies(page) {
    let page_nb = document.querySelector("#page-nb");
    page_nb.textContent = `Page ${page}`;
    let content_container = document.querySelector(".content-container");

    // While not fetched
    content_container.innerHTML = "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
    
    // Fetching every characters
    fetch(`https://swapi.dev/api/species/?page=${page}`)
        .then((resp) => resp.json())
        .then(function (data) {
            content_container.innerHTML = "";
            let species = data.results;            
            species.forEach(specy => {
                specy_img = defineIcon(specy.name, page)
                content_container.innerHTML += 
                `<div class='card'>
                    <div class='col-lg-4 col-sm-4'>
                        <img class="card-img-top" src="${specy_img}" alt="Card image cap">
                    </div>
                    <div class='col-lg-8 col-sm-8'>
                        <div class='card-body'>
                            <h5 class='card-title'>${specy.name}</h5>
                            <p class='card-text'>Classification: ${specy.classification}</p>
                            <p class='card-text'>Designation: ${specy.designation}</p>
                            <p class='card-text'>Average height: ${specy.average_height} cm</p>
                            <p class='card-text'>Average lifespan: ${specy.average_lifespan} years</p>
                            <p class='card-text'>Skin colors: ${specy.skin_colors}</p>
                            <p class='card-text'>Hair colors: ${specy.hair_colors}</p>
                            <p class='card-text'>Eye colors: ${specy.eye_colors}</p>
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
    const speciesImages = {
        1: {
            "Human": "https://static.wikia.nocookie.net/starwars/images/5/5d/Humans-TESB30.jpg/revision/latest/scale-to-width-down/500?cb=20100628191857",
            "Droid": "https://static.wikia.nocookie.net/starwars/images/c/c8/Counterparts.jpg/revision/latest/scale-to-width-down/250?cb=20070608122549",
            "Wookie": "https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108052810",
            "Rodian": "https://static.wikia.nocookie.net/starwars/images/2/23/Rodian_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20061127015745",
            "Hutt": "https://static.wikia.nocookie.net/starwars/images/a/a7/HuttNEGAS.png/revision/latest/scale-to-width-down/500?cb=20130115030417",
            "Yoda's species": "https://static.wikia.nocookie.net/starwars/images/c/c3/Yoda_TPM_RotS.png/revision/latest/scale-to-width-down/500?cb=20130810185858",
            "Trandoshan": "https://static.wikia.nocookie.net/starwars/images/4/45/Trandoshan_NEGAS.png/revision/latest/scale-to-width-down/500?cb=20130115031110",
            "Mon Calamari": "https://static.wikia.nocookie.net/starwars/images/7/77/Mon_Calamari_NEGAS.jpg/revision/latest/scale-to-width-down/350?cb=20170926052257",
            "Ewok": "https://static.wikia.nocookie.net/starwars/images/8/82/EwokNEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20061126065723",
            "Sullustan": "https://static.wikia.nocookie.net/starwars/images/f/f5/Sullustan_NEGAS.jpg/revision/latest?cb=20100810063353",
        },
        2: {
            "Neimodian": "https://static.wikia.nocookie.net/starwars/images/b/b0/NeimoidiansSWE.png/revision/latest/scale-to-width-down/392?cb=20140909101500",
            "Gungan": "https://static.wikia.nocookie.net/starwars/images/d/d5/Gungan_warrior.png/revision/latest/scale-to-width-down/500?cb=20160911012903",
            "Toydarian": "https://static.wikia.nocookie.net/starwars/images/6/6e/Wattoep2promotionalfull.jpg/revision/latest/scale-to-width-down/499?cb=20081222024850",
            "Dug": "https://static.wikia.nocookie.net/starwars/images/2/2c/Dug_full_body.png/revision/latest/scale-to-width-down/350?cb=20140728150031",
            "Twi'lek": "https://static.wikia.nocookie.net/starwars/images/9/95/TwilekNEGAS.png/revision/latest/scale-to-width-down/500?cb=20150523023715",
            "Aleena": "https://static.wikia.nocookie.net/starwars/images/e/e3/Ratts.jpg/revision/latest/scale-to-width-down/153?cb=20080508150745",
            "Vulptereen": "https://static.wikia.nocookie.net/starwars/images/c/cd/Dud_Bolt_FF_Scan.png/revision/latest/scale-to-width-down/312?cb=20150414170315",
            "Xexto": "https://static.wikia.nocookie.net/starwars/images/3/30/Gasgano.jpg/revision/latest/scale-to-width-down/241?cb=20150331133737",
            "Toong": "https://static.wikia.nocookie.net/starwars/images/1/18/BenQuadinarosFull-SWE.png/revision/latest/scale-to-width-down/249?cb=20160910192602",
            "Cerean": "https://static.wikia.nocookie.net/starwars/images/b/be/Mundi_bodyshot.png/revision/latest/scale-to-width-down/280?cb=20140603153008",
        },
        3: {
            "Nautolan": "https://static.wikia.nocookie.net/starwars/images/8/81/Kitfisto_detail.png/revision/latest/scale-to-width-down/298?cb=20170608230157",
            "Zabrak": "https://static.wikia.nocookie.net/starwars/images/a/a4/Zabrak_DICE.png/revision/latest/scale-to-width-down/500?cb=20151106031307",
            "Tholothian": "https://static.wikia.nocookie.net/starwars/images/6/66/Tholothian-UP.png/revision/latest/scale-to-width-down/236?cb=20190415010812",
            "Iktotchi": "https://static.wikia.nocookie.net/starwars/images/f/f4/SaeseeTiinFull-SWE.png/revision/latest/scale-to-width-down/297?cb=20160913232333",
            "Quermian": "https://static.wikia.nocookie.net/starwars/images/4/4f/Yarael_Poof_USW.png/revision/latest/scale-to-width-down/500?cb=20160701061715",
            "Kel Dor": "https://static.wikia.nocookie.net/starwars/images/f/fd/Plokoon_detail.png/revision/latest/scale-to-width-down/273?cb=20111116042533",
            "Chagrian": "https://static.wikia.nocookie.net/starwars/images/5/5e/ChagrianNEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20061201134120",
            "Geonosian": "https://static.wikia.nocookie.net/starwars/images/a/a0/Geonosian_NEGAS.png/revision/latest/scale-to-width-down/500?cb=20170226060952",
            "Mirialan": "https://static.wikia.nocookie.net/starwars/images/e/e1/Luminara_TCW.jpg/revision/latest/scale-to-width-down/326?cb=20090310213227",
            "Clawdite": "https://static.wikia.nocookie.net/starwars/images/3/37/ClawditeNEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20090709061818",
        },
        4: {
            "Besalisk": "https://static.wikia.nocookie.net/starwars/images/1/1b/BesaliskNEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20130908201429",
            "Kaminoan": "https://static.wikia.nocookie.net/starwars/images/0/03/KaminoanNEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20090709062442",
            "Skakoan": "https://static.wikia.nocookie.net/starwars/images/a/a0/Skakoan2.jpg/revision/latest/scale-to-width-down/500?cb=20091012195839",
            "Muun": "https://static.wikia.nocookie.net/starwars/images/f/f4/SaeseeTiinFull-SWE.png/revision/latest/scale-to-width-down/297?cb=20160913232333",
            "Togruta": "https://static.wikia.nocookie.net/starwars/images/b/b2/Togruta_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20100810070146",
            "Kaleesh": "https://static.wikia.nocookie.net/starwars/images/d/d0/Kaleesh-Alien_Archive.jpg/revision/latest/scale-to-width-down/500?cb=20181011072919",
            "Pau'an": "https://static.wikia.nocookie.net/starwars/images/2/22/Pau%27an.jpg/revision/latest/scale-to-width-down/499?cb=20070705042952",
        },
    };

    return speciesImages[page][name] || "default_image_url";
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function () {
    if (page < 4) {
        page += 1;
        showSpecies(page);
    }
    else {
        alert("You've reached last page");
    }
});

document.querySelector("#prev-btn").addEventListener("click", function () {
    if (page > 1) {
        page -= 1;
        showSpecies(page);
    }
    else {
        alert("You're on page 1 !");
    }
});