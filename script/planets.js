let page = 1;
document.addEventListener("DOMContentLoaded", showPlanets(page));

function showPlanets(page) {
    let page_nb = document.querySelector("#page-nb");
    page_nb.textContent = `Page ${page}`;
    let content_container = document.querySelector(".content-container");

    // While movies not fetched
    content_container.innerHTML = "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

    // Fetching every characters
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
        content_container.innerHTML = "";
        let planets = data.results;
        planets.forEach(planet => {
            if (planet.name !== "unknown") {
                planet_img = defineIcon(planet.name, page);
                content_container.innerHTML += 
                `<div class='card'>
                    <div class='col-lg-3 col-sm-3'>
                        <img class="card-img-top" src="${planet_img}" alt="Card image cap">
                    </div>
                    <div class = 'col-lg-9 col-sm-9'>
                        <div class='card-body'>
                            <h5 class='card-title'>${planet.name}</h5>
                            <p class='card-text'>Climate: ${planet.climate}</p>
                            <p class='card-text'>Terrain: ${planet.terrain}</p>
                            <p class='card-text'>Population: ${planet.population}</p>
                        </div>
                    </div>
                </div>`
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    })
}

function defineIcon(name, page) {
    const planetImages = {
        1: {
            "Tatooine": "https://static.wikia.nocookie.net/frstarwars/images/f/f6/Tatoooinefull.jpg/revision/latest/scale-to-width-down/350?cb=20070206173843",
            "Alderaan": "https://static.wikia.nocookie.net/frstarwars/images/4/4a/Alderaan.jpg/revision/latest/scale-to-width-down/350?cb=20160506145540",
            "Yavin IV": "https://static.wikia.nocookie.net/frstarwars/images/b/b4/Yavin_4.png/revision/latest/scale-to-width-down/350?cb=20170712110415",
            "Hoth": "https://static.wikia.nocookie.net/frstarwars/images/d/d1/Hoth.jpg/revision/latest/scale-to-width-down/350?cb=20150220140638",
            "Dagobah": "https://static.wikia.nocookie.net/frstarwars/images/1/1c/Dagobah.jpg/revision/latest/scale-to-width-down/350?cb=20150220140000",
            "Bespin": "https://static.wikia.nocookie.net/frstarwars/images/8/80/Bespin_TESB.png/revision/latest/scale-to-width-down/350?cb=20170202071746",
            "Endor": "https://static.wikia.nocookie.net/frstarwars/images/9/95/Lune_Foresti%C3%A8re_d%27Endor.png/revision/latest/scale-to-width-down/350?cb=20170710091437",
            "Naboo": "https://static.wikia.nocookie.net/frstarwars/images/3/3c/Naboo.png/revision/latest/scale-to-width-down/350?cb=20160325154930",
            "Coruscant": "https://static.wikia.nocookie.net/frstarwars/images/4/42/Coruscant.png/revision/latest/scale-to-width-down/350?cb=20160513083512",
            "Kamino": "https://static.wikia.nocookie.net/frstarwars/images/d/d4/Kamino.png/revision/latest/scale-to-width-down/350?cb=20161202165036",
        },
        2: {
            "Geonosis": "https://static.wikia.nocookie.net/frstarwars/images/a/a5/Geonosis.png/revision/latest/scale-to-width-down/350?cb=20160402134809",
            "Utapau": "https://static.wikia.nocookie.net/frstarwars/images/e/e1/Utapau.png/revision/latest/scale-to-width-down/350?cb=20150220144808",
            "Mustafar": "https://static.wikia.nocookie.net/frstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest/scale-to-width-down/350?cb=20201021094213",
            "Kashyyyk": "https://static.wikia.nocookie.net/frstarwars/images/8/8a/Kashyyk_Ghost_Raid.png/revision/latest/scale-to-width-down/350?cb=20181013124244",
            "Polis Massa": "https://static.wikia.nocookie.net/starwars/images/8/8c/Polis_Massa_Base_AoRSR.png/revision/latest?cb=20180812160241",
            "Mygeeto": "https://static.wikia.nocookie.net/frstarwars/images/d/db/Bataille_de_Mygeeto.png/revision/latest/scale-to-width-down/350?cb=20160216083355",
            "Felucia": "https://static.wikia.nocookie.net/frstarwars/images/a/a8/Felucia.png/revision/latest/scale-to-width-down/350?cb=20170714182032",
            "Cato Neimoidia": "https://static.wikia.nocookie.net/frstarwars/images/5/5b/Cato_Neimoidia.png/revision/latest/scale-to-width-down/350?cb=20150207095053",
            "Saleucami": "https://static.wikia.nocookie.net/frstarwars/images/8/89/Saleucami-TD.png/revision/latest/scale-to-width-down/350?cb=20170207071706",
            "Stewjon": "https://preview.redd.it/94430srq9ez41.png?auto=webp&s=d8aa5085032e34130e1a946e241ad4e4611981c7",
        },
        3: {
            "Eriadu": "https://static.wikia.nocookie.net/frstarwars/images/5/58/Eriadu.jpg/revision/latest/scale-to-width-down/350?cb=20150226101409",
            "Corellia": "https://static.wikia.nocookie.net/frstarwars/images/d/d7/Corellia-SWCT.png/revision/latest/scale-to-width-down/350?cb=20180928080759",
            "Rodia": "https://static.wikia.nocookie.net/frstarwars/images/1/15/Rodia.jpg/revision/latest/scale-to-width-down/350?cb=20170702181636",
            "Nal Hutta": "https://static.wikia.nocookie.net/frstarwars/images/1/1f/Nal_Hutta.png/revision/latest/scale-to-width-down/350?cb=20170818134314",
            "Dantooine": "https://static.wikia.nocookie.net/frstarwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest/scale-to-width-down/903?cb=20200121075936",
            "Bestine IV": "https://static.wikia.nocookie.net/frstarwars/images/0/04/Bestine_IV.jpg/revision/latest/scale-to-width-down/350?cb=20150822132608",
            "Ord Mantell": "https://static.wikia.nocookie.net/frstarwars/images/d/dc/Ord_Mantell.png/revision/latest/scale-to-width-down/350?cb=20150223083828",
            "Trandosha": "https://static.wikia.nocookie.net/frstarwars/images/4/49/Trandosha.png/revision/latest/scale-to-width-down/350?cb=20150224093810",
            "Socorro": "https://static.wikia.nocookie.net/frstarwars/images/0/00/LokSocorro.png/revision/latest/scale-to-width-down/350?cb=20210213091306",
        },
        4: {
            "Mon Cala": "https://static.wikia.nocookie.net/frstarwars/images/1/1d/Mon_Calamari.png/revision/latest/scale-to-width-down/350?cb=20170715195030",
            "Chandrila": "https://static.wikia.nocookie.net/frstarwars/images/9/9b/Chandrila_AoRCR.png/revision/latest/scale-to-width-down/820?cb=20170705112226",
            "Sullust": "https://static.wikia.nocookie.net/frstarwars/images/9/91/Sullust.png/revision/latest/scale-to-width-down/350?cb=20180322102341",
            "Toydaria": "https://static.wikia.nocookie.net/frstarwars/images/5/5c/Toydaria.png/revision/latest/scale-to-width-down/350?cb=20150608200945",
            "Malastare": "https://static.wikia.nocookie.net/frstarwars/images/d/de/Malastare.jpg/revision/latest/scale-to-width-down/350?cb=20160906193320",
            "Dathomir": "https://static.wikia.nocookie.net/frstarwars/images/d/d7/Dathomir.png/revision/latest/scale-to-width-down/350?cb=20150207080416",
            "Ryloth": "https://static.wikia.nocookie.net/frstarwars/images/a/a9/Ryloth.png/revision/latest/scale-to-width-down/350?cb=20200519075644",
            "Aleen Minor": "https://static.wikia.nocookie.net/frstarwars/images/4/42/Aleen.png/revision/latest/scale-to-width-down/350?cb=20150228091544",
            "Vulpter": "https://static.wikia.nocookie.net/frstarwars/images/f/fc/Vulpter.jpg/revision/latest/scale-to-width-down/350?cb=20150623125011",
            "Troiken": "https://static.wikia.nocookie.net/frstarwars/images/c/ce/Troiken.jpg/revision/latest/scale-to-width-down/350?cb=20190503185106",
        },
        5: {
            "Tund": "https://static.wikia.nocookie.net/frstarwars/images/4/4f/Tund.jpg/revision/latest/scale-to-width-down/350?cb=20161028084834",
            "Haruun Kal": "https://static.wikia.nocookie.net/frstarwars/images/c/c8/Haruun_Kal.jpg/revision/latest/scale-to-width-down/319?cb=20130108050310",
            "Cerea": "https://static.wikia.nocookie.net/frstarwars/images/0/01/Cerea.jpg/revision/latest/scale-to-width-down/350?cb=20150531081925",
            "Glee Anselm": "https://static.wikia.nocookie.net/frstarwars/images/0/0d/Glee_Anselm.jpg/revision/latest/scale-to-width-down/350?cb=20150612075440",
            "Iridonia": "https://static.wikia.nocookie.net/frstarwars/images/c/c5/Iridonia.jpg/revision/latest/scale-to-width-down/350?cb=20150614075656",
            "Tholoth": "https://cdn-icons-png.flaticon.com/512/116/116859.png",
            "Iktotch": "https://static.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png/revision/latest/scale-to-width-down/500?cb=20180501025533",
            "Quermia": "https://static.wikia.nocookie.net/starwars/images/2/29/Quermia_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20070701083603",
            "Dorin": "https://static.wikia.nocookie.net/starwars/images/9/9b/Dorin-FDCR.png/revision/latest/scale-to-width-down/500?cb=20160304050545",
            "Champala": "https://static.wikia.nocookie.net/starwars/images/d/d7/Champala_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20061114221731",
        },
        6: {
            "Mirial": "https://static.wikia.nocookie.net/starwars/images/6/6a/Ruuria-TFABG.jpg/revision/latest/scale-to-width-down/350?cb=20190118225241",
            "Serenno": "https://static.wikia.nocookie.net/starwars/images/b/b2/Serenno-Massacre.png/revision/latest/scale-to-width-down/500?cb=20130607043719",
            "Concord Dawn": "https://static.wikia.nocookie.net/starwars/images/8/84/Concord_Dawn_system.png/revision/latest/scale-to-width-down/500?cb=20160128214904",
            "Zolan": "https://static.wikia.nocookie.net/starwars/images/6/66/Zolan.jpg/revision/latest/scale-to-width-down/500?cb=20070701111500",
            "Ojom": "https://static.wikia.nocookie.net/starwars/images/9/9f/Ojom.jpg/revision/latest/scale-to-width-down/500?cb=20061119201000",
            "Skako": "https://static.wikia.nocookie.net/starwars/images/c/cd/Skako.jpg/revision/latest/scale-to-width-down/320?cb=20100706044200",
            "Muunilinst": "https://static.wikia.nocookie.net/starwars/images/1/19/Muunilinst.jpg/revision/latest/scale-to-width-down/350?cb=20071221131608",
            "Shili": "https://static.wikia.nocookie.net/starwars/images/b/b8/ShiliNEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20061126102716",
            "Kalee": "https://static.wikia.nocookie.net/starwars/images/c/c1/Kalee_TEA.jpg/revision/latest/scale-to-width-down/500?cb=20200828221630",
            "Umbara": "https://static.wikia.nocookie.net/starwars/images/8/82/Umbara_TVE.png/revision/latest/scale-to-width-down/250?cb=20211110071751",
        },
    };

    return planetImages[page][name] || "default_image_url";
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function() {
    if (page < 6) {
        page += 1;
        showPlanets(page);
    }
    else {
        alert("You've reached last page");
    }
});

document.querySelector("#prev-btn").addEventListener("click", function() {
    if (page > 1) {
        page -= 1;
        showPlanets(page);
    }
    else {
        alert("You're on page 1 !");
    }
});