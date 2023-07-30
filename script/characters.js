let page = 1;
let firstTime = true;
document.addEventListener("DOMContentLoaded", showPeople(page));

async function showPeople(page) {
    let page_nb = document.querySelector("#page-nb");
    page_nb.textContent = `Page ${page}`;
    let content_container = document.querySelector(".content-container");

    
    // while not fetched
    content_container.innerHTML = "<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
    
    // Fetching every characters
    fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((resp) => resp.json())
        .then(function (data) {
            content_container.innerHTML = "";
            let people = data.results;
            
            people.forEach(person => {
                fetch(person.homeworld)
                    .then((resp) => resp.json())
                    .then(function (planet) {

                        // Defining icon according to the character
                        person_image = defineIcon(person.name, page);
                        
                        if (person.height !== "unknown") {
                            person.height += " cm";
                        }
                        
                        if (person.mass !== "unknown") {
                            person.mass += " kg";
                        }
                        
                        homeworld = planet.name;
                        content_container.innerHTML += 
                        `<div class='card'>
                            <div class='col-lg-3 col-sm-3'><img class="card-img-top" src="${person_image}" alt="Card image cap" /></div>
                            <div class='col-lg-9 col-sm-9'>
                                <div class='card-body'>
                                    <h5 class='card-title'>${person.name}</h5>
                                    <p class='card-text'>Homeworld: ${homeworld}</p>
                                    <p class='card-text'>Height: ${person.height}</p>
                                    <p class='card-text'>Mass: ${person.mass}</p>
                                    <p class='card-text'>Gender: ${person.gender}</p>
                                    <p class='card-text'>Birth year: ${person.birth_year}</p>
                                    <p id='page-nb' class='card-text' hidden>${page}</p>
                                </div>
                            </div>
                        </div>`;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

function defineIcon(name, page) {
    const personImages = {
        1: {
            "Luke Skywalker": "https://i.ibb.co/c8d15Lm/luke-skywalker-icon.jpg",
            "C-3PO": "https://i.ibb.co/P10bCwj/c3po-icon.webp",
            "R2-D2": "https://i.ibb.co/QpcJ2fh/r2d2-icon.jpg",
            "Darth Vader": "https://i.ibb.co/55xrqm4/darth-vader-icon.jpg",
            "Leia Organa": "https://i.ibb.co/KrwD6w5/leia-organa-icon.jpg",
            "Owen Lars": "https://i.ibb.co/BLQLzZQ/owen-lars-icon.webp",
            "Beru Whitesun lars": "https://i.ibb.co/vv7tbj1/beru-whitesun-lars-icon.jpg",
            "R5-D4": "https://i.ibb.co/PmVb0pd/r5d4-icon.jpg",
            "Biggs Darklighter": "https://i.ibb.co/9hcs9Rc/biggs-darklighter-icon.webp",
            "Obi-Wan Kenobi": "https://i.ibb.co/Wzsr0rD/obiwan-kenobi-icon.jpg",
        },
        2: {
            "Anakin Skywalker": "https://static.wikia.nocookie.net/frstarwars/images/8/8e/Anakin_Skywalker.png/revision/latest?cb=20160426114514",
            "Wilhuff Tarkin": "https://static.wikia.nocookie.net/frstarwars/images/4/4b/Wilhuff_Tarkin.jpg/revision/latest?cb=20210518143544",
            "Chewbacca": "https://static.wikia.nocookie.net/lemondededisney/images/1/1d/Chewbacca.jpg/revision/latest?cb=20200506134208&path-prefix=fr",
            "Jabba Desilijic Tiure": "https://static.wikia.nocookie.net/frstarwars/images/3/39/Jabba_le_Hutt.png/revision/latest?cb=20170818180549",
            "Greedo": "https://www.starwars-holonet.com/holonet/images/3/39/386/perso_greedo_2.jpg",
            "Han Solo": "https://static.wikia.nocookie.net/frstarwars/images/6/64/HanSolo_TFA.png/revision/latest/scale-to-width-down/350?cb=20160111071248",
            "Jek Tono Porkins": "https://static.wikia.nocookie.net/frstarwars/images/e/eb/JekPorkins-DB.png",
            "Yoda": "https://m.media-amazon.com/images/I/71MA6epP0WL._AC_SL1500_.jpg",
            "Palpatine": "https://fr.web.img2.acsta.net/r_654_368/newsv7/21/11/18/12/23/0337867.jpg",
            "Wedge Antilles": "https://static.wikia.nocookie.net/frstarwars/images/e/e3/Wedge_Antilles_TROS.jpg/revision/latest?cb=20200119084500",
        },
        3: {
            "Boba Fett": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Boba_Fett_-_A_Fett_to_Remember.jpg/800px-Boba_Fett_-_A_Fett_to_Remember.jpg",
            "IG-88": "https://avatars.githubusercontent.com/u/41179841?v=4",
            "Bossk": "https://jolstatic.fr/www/captures/2041/6/119186.jpg",
            "Lando Calrissian": "https://static.wikia.nocookie.net/frstarwars/images/c/c2/Lando_Calrissian.png/revision/latest?cb=20200101184241",
            "Lobot": "https://www.starwars-holonet.com/holonet/images/e/e8/8509/perso_lobot_1.jpg",
            "Ackbar": "https://static.wikia.nocookie.net/frstarwars/images/f/fb/Ackbar_HS.jpg/revision/latest?cb=20190317063713",
            "Mon Mothma": "https://static2.srcdn.com/wordpress/wp-content/uploads/2016/11/Rogue-One-A-Star-Wars-Story-Mon-Mothma-Cropped.jpg",
            "Wicket Systri Warrick": "https://static.wikia.nocookie.net/starwars/images/4/41/Wicket-TROS.png/revision/latest/scale-to-width-down/700?cb=20200317055300",
            "Nien Nunb": "https://static.wikia.nocookie.net/frstarwars/images/f/f7/Nien_Nunb.jpg/revision/latest/scale-to-width-down/350?cb=20150225151827",
            "Arvel Crynyd": "https://static.wikia.nocookie.net/frstarwars/images/7/75/Arvel_Crynyd.jpg/revision/latest/scale-to-width-down/1000?cb=20150614192903",
        },
        4: {
            "Qui-Gon Jinn": "https://static.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest/scale-to-width-down/500?cb=20180430174809",
            "Nute Gunray": "https://static.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png/revision/latest/scale-to-width-down/499?cb=20170615051121",
            "Watto": "https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest/scale-to-width-down/500?cb=20081222024729",
            "Finis Valorum": "https://static.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png/revision/latest/scale-to-width-down/371?cb=20180116211237",
            "Sebulba": "https://static.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png/revision/latest/scale-to-width-down/350?cb=20170610002520",
            "Padmé Amidala": "https://static.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/scale-to-width-down/500?cb=20100423143631",
            "Jar Jar Binks": "https://static.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest/scale-to-width-down/500?cb=20080303052132",
            "Roos Tarpals": "https://static.wikia.nocookie.net/starwars/images/d/d5/TarpalsHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20211214030207",
            "Rugor Nass": "https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png/revision/latest/scale-to-width-down/350?cb=20200807030216",
            "Ric Olié": "https://static.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png/revision/latest/scale-to-width-down/270?cb=20120226230538",
        },
        5: {
            "Quarsh Panaka": "https://static.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png/revision/latest/scale-to-width-down/500?cb=20130126044005",
            "Bib Fortuna": "https://static.wikia.nocookie.net/starwars/images/0/0d/BibFortuna-DGTmoTMS2.png/revision/latest/scale-to-width-down/500?cb=20220311060715",
            "Ratts Tyerel": "https://static.wikia.nocookie.net/starwars/images/a/a5/RattsHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20211213051802",
            "Darth Maul": "https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest/scale-to-width-down/499?cb=20140209162228",
            "Dud Bolt": "https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest/scale-to-width-down/500?cb=20141214155313",
            "Gasgano": "https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png/revision/latest/scale-to-width-down/499?cb=20211212055452",
            "Ben Quadinaros": "https://static.wikia.nocookie.net/starwars/images/0/02/BenQuadinarosHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20191007192605",
            "Shmi Skywalker": "https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg/revision/latest/scale-to-width-down/833?cb=20171114023541",
            "Mace Windu": "https://static.wikia.nocookie.net/starwars/images/f/fc/Mace_Windu.jpg/revision/latest/scale-to-width-down/499?cb=20071230055326",
            "Ayla Secura": "https://static.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg/revision/latest/scale-to-width-down/500?cb=20211226183259",
        },
        6: {
            "Ki-Adi-Mundi": "https://static.wikia.nocookie.net/starwars/images/6/6d/KiAdiMundi-SWCT.png/revision/latest/scale-to-width-down/500?cb=20200807031541",
            "Saesee Tiin": "https://static.wikia.nocookie.net/starwars/images/a/a3/SaeseeTiin-SWCT.png/revision/latest/scale-to-width-down/350?cb=20200807024726",
            "Kit Fisto": "https://static.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png/revision/latest/scale-to-width-down/273?cb=20180225000050",
            "Eeth Koth": "https://static.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png/revision/latest/scale-to-width-down/350?cb=20200807032900",
            "Yarael Poof": "https://static.wikia.nocookie.net/starwars/images/b/b2/YaraelPoof-SWCT.png/revision/latest/scale-to-width-down/350?cb=20211219001726",
            "Plo Koon": "https://static.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png/revision/latest/scale-to-width-down/500?cb=20211219002811",
            "Mas Amedda": "https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest/scale-to-width-down/500?cb=20160630051412",
            "Adi Gallia": "https://static.wikia.nocookie.net/starwars/images/f/f2/AdiGallia2-SWE.png/revision/latest/scale-to-width-down/500?cb=20211211183231",
            "Gregar Typho": "https://static.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg/revision/latest/scale-to-width-down/350?cb=20090903192036",
            "Cordé": "https://static.wikia.nocookie.net/starwars/images/e/e5/Corde-SWCT.png/revision/latest/scale-to-width-down/500?cb=20160713053607",
        },
        7: {
            "Poggle the Lesser": "https://static.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png/revision/latest/scale-to-width-down/500?cb=20160707212132",
            "Dooku": "https://static.wikia.nocookie.net/starwars/images/f/fa/DookuHS-SWILotS.png/revision/latest/scale-to-width-down/350?cb=20190426043747",
            "Luminara Unduli": "https://static.wikia.nocookie.net/starwars/images/9/91/LuminaraUnduli-Encyclopedia.png/revision/latest/scale-to-width-down/500?cb=20180206232118",
            "Cliegg Lars": "https://static.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest/scale-to-width-down/350?cb=20180513065414",
            "Bail Prestor Organa": "https://static.wikia.nocookie.net/starwars/images/b/b0/Bailrogueone.jpg/revision/latest/scale-to-width-down/499?cb=20170924232338",
            "Zam Wesell": "https://static.wikia.nocookie.net/starwars/images/d/d1/ZamWesell.jpg/revision/latest/scale-to-width-down/350?cb=20091224023343",
            "Dormé": "https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest/scale-to-width-down/500?cb=20160630051412",
            "Jango Fett": "https://static.wikia.nocookie.net/starwars/images/7/70/Jango_OP.jpg/revision/latest/scale-to-width-down/500?cb=20071029210612",
            "Dexter Jettster": "https://static.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg/revision/latest/scale-to-width-down/350?cb=20111106014007",
            "Barriss Offee": "https://static.wikia.nocookie.net/starwars/images/a/a4/BarrissOffee-OP.png/revision/latest/scale-to-width-down/499?cb=20211214033336",
        },
        8: {
            "Lama Su": "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest/scale-to-width-down/499?cb=20080117165735",
            "Wat Tambor": "https://static.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png/revision/latest/scale-to-width-down/249?cb=20180301034933",
            "Jocasta Nu": "https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg/revision/latest/scale-to-width-down/499?cb=20090909121527",
            "R4-P17": "https://static.wikia.nocookie.net/starwars/images/5/52/R4-P17_USWNE.png/revision/latest/scale-to-width-down/350?cb=20200119211556",
            "San Hill": "https://static.wikia.nocookie.net/starwars/images/8/8b/SanHillHS-AOTC.png/revision/latest/scale-to-width-down/350?cb=20200730024920",
            "Shaak Ti": "https://static.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png/revision/latest/scale-to-width-down/320?cb=20160914002036",
            "Grievous": "https://static.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg/revision/latest/scale-to-width-down/500?cb=20100630082056",
            "Tarfful": "https://static.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png/revision/latest/scale-to-width-down/500?cb=20220202061650",
            "Raymus Antilles": "https://static.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png/revision/latest?cb=20180922045037",
            "Taun We": "https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg/revision/latest/scale-to-width-down/500?cb=20080117164920",
        },
        9: {
            "Tion Medon": "https://static.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg/revision/latest/scale-to-width-down/350?cb=20091130182814",
            "Sly Moore": "https://static.wikia.nocookie.net/starwars/images/b/b7/SlyMooreStare-OP.png/revision/latest/scale-to-width-down/500?cb=20211214041804",
        },
    };

    return personImages[page]?.[name] || null;
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function () {
    if (page < 9) {
        let content_container = document.querySelector(".content-container");
        content_container.innerHTML = "";
        showPeople(page += 1);
    }
    else {
        alert("You're on last page !");
    }
});

document.querySelector("#prev-btn").addEventListener("click", function () {
    if (page > 1) {
        let content_container = document.querySelector(".content-container");
        content_container.innerHTML = "";
        showPeople(page -= 1);
    }
    else {
        alert("You're on page 1 !");
    }
});