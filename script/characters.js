let page = 1
let firstTime = true
document.addEventListener("DOMContentLoaded", showPeople(page))

async function showPeople(page) {
    let page_nb = document.querySelector("#page-nb")
    page_nb.textContent = `Page ${page}`
    let content_container = document.querySelector(".content-container")
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
                        person_image = defineIcon(person.name, page)
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
}

function defineIcon(name, page) {
    // Page 1
    if (page === 1) {
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
    }
    // Page 2
    else if (page === 2) {
        if (name === "Anakin Skywalker") {
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
    }
    // Page 3
    else if (page === 3) {
        if (name === "Han Solo") {
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
        else if (name === "Wicket Systri Warrick") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/41/Wicket-TROS.png/revision/latest/scale-to-width-down/700?cb=20200317055300"
        }
        else if (name === "Nien Nunb") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/f/f7/Nien_Nunb.jpg/revision/latest/scale-to-width-down/350?cb=20150225151827"
        }
        else if (name === "Arvel Crynyd") {
            person_image = "https://static.wikia.nocookie.net/frstarwars/images/7/75/Arvel_Crynyd.jpg/revision/latest/scale-to-width-down/1000?cb=20150614192903"
        }
    }
    else if (page === 4) {
        if (name === "Qui-Gon Jinn") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest/scale-to-width-down/500?cb=20180430174809"
        }
        else if (name === "Nute Gunray") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png/revision/latest/scale-to-width-down/499?cb=20170615051121"
        }
        else if (name === "Watto") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest/scale-to-width-down/500?cb=20081222024729"
        }
        else if (name === "Finis Valorum") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png/revision/latest/scale-to-width-down/371?cb=20180116211237"
        }
        else if (name === "Sebulba") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png/revision/latest/scale-to-width-down/350?cb=20170610002520"
        }
        else if (name === "Padmé Amidala") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/scale-to-width-down/500?cb=20100423143631"
        }
        else if (name === "Jar Jar Binks") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest/scale-to-width-down/500?cb=20080303052132"
        }
        else if (name === "Roos Tarpals") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/d/d5/TarpalsHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20211214030207"
        }
        else if (name === "Rugor Nass") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png/revision/latest/scale-to-width-down/350?cb=20200807030216"
        }
        else if (name === "Ric Olié") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png/revision/latest/scale-to-width-down/270?cb=20120226230538"
        }
    }
    // Page 5
    else if (page === 5) {
        if (name === "Quarsh Panaka") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png/revision/latest/scale-to-width-down/500?cb=20130126044005"
        }
        else if (name === "Bib Fortuna") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/0/0d/BibFortuna-DGTmoTMS2.png/revision/latest/scale-to-width-down/500?cb=20220311060715"
        }
        else if (name === "Ratts Tyerel") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/a/a5/RattsHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20211213051802"
        }
        else if (name === "Darth Maul") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest/scale-to-width-down/499?cb=20140209162228"
        }
        else if (name === "Dud Bolt") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest/scale-to-width-down/500?cb=20141214155313"
        }
        else if (name === "Gasgano") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png/revision/latest/scale-to-width-down/499?cb=20211212055452"
        }
        else if (name === "Ben Quadinaros") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/0/02/BenQuadinarosHS-SWE.png/revision/latest/scale-to-width-down/350?cb=20191007192605"
        }
        else if (name === "Shmi Skywalker") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg/revision/latest/scale-to-width-down/833?cb=20171114023541"
        }
        else if (name === "Mace Windu") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/fc/Mace_Windu.jpg/revision/latest/scale-to-width-down/499?cb=20071230055326"
        }
        else if (name === "Ayla Secura") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg/revision/latest/scale-to-width-down/500?cb=20211226183259"
        }
    }
    // Page 6
    else if (page === 6) {
        if (name === "Ki-Adi-Mundi") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/6/6d/KiAdiMundi-SWCT.png/revision/latest/scale-to-width-down/500?cb=20200807031541"
        }
        else if (name === "Saesee Tiin") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/a/a3/SaeseeTiin-SWCT.png/revision/latest/scale-to-width-down/350?cb=20200807024726"
        }
        else if (name === "Kit Fisto") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png/revision/latest/scale-to-width-down/273?cb=20180225000050"
        }
        else if (name === "Eeth Koth") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png/revision/latest/scale-to-width-down/350?cb=20200807032900"
        }
        else if (name === "Yarael Poof") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/b/b2/YaraelPoof-SWCT.png/revision/latest/scale-to-width-down/350?cb=20211219001726"
        }
        else if (name === "Plo Koon") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png/revision/latest/scale-to-width-down/500?cb=20211219002811"
        }
        else if (name === "Mas Amedda") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest/scale-to-width-down/500?cb=20160630051412"
        }
        else if (name === "Adi Gallia") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/f2/AdiGallia2-SWE.png/revision/latest/scale-to-width-down/500?cb=20211211183231"
        }
        else if (name === "Gregar Typho") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg/revision/latest/scale-to-width-down/350?cb=20090903192036"
        }
        else if (name === "Cordé") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/e/e5/Corde-SWCT.png/revision/latest/scale-to-width-down/500?cb=20160713053607"
        }
    }
    // Page 7
    else if (page === 7) {
        if (name === "Poggle the Lesser") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png/revision/latest/scale-to-width-down/500?cb=20160707212132"
        }
        else if (name === "Dooku") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/f/fa/DookuHS-SWILotS.png/revision/latest/scale-to-width-down/350?cb=20190426043747"
        }
        else if (name === "Luminara Unduli") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/9/91/LuminaraUnduli-Encyclopedia.png/revision/latest/scale-to-width-down/500?cb=20180206232118"
        }
        else if (name === "Cliegg Lars") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest/scale-to-width-down/350?cb=20180513065414"
        }
        else if (name === "Bail Prestor Organa") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/b/b0/Bailrogueone.jpg/revision/latest/scale-to-width-down/499?cb=20170924232338"
        }
        else if (name === "Zam Wesell") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/d/d1/ZamWesell.jpg/revision/latest/scale-to-width-down/350?cb=20091224023343"
        }
        else if (name === "Dormé") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest/scale-to-width-down/500?cb=20160630051412"
        }
        else if (name === "Jango Fett") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/7/70/Jango_OP.jpg/revision/latest/scale-to-width-down/500?cb=20071029210612"
        }
        else if (name === "Dexter Jettster") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg/revision/latest/scale-to-width-down/350?cb=20111106014007"
        }
        else if (name === "Barriss Offee") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/a/a4/BarrissOffee-OP.png/revision/latest/scale-to-width-down/499?cb=20211214033336"
        }
    }
    // Page 8
    else if (page === 8) {
        if (name === "Lama Su") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest/scale-to-width-down/499?cb=20080117165735"
        }
        else if (name === "Wat Tambor") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png/revision/latest/scale-to-width-down/249?cb=20180301034933"
        }
        else if (name === "Jocasta Nu") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg/revision/latest/scale-to-width-down/499?cb=20090909121527"
        }
        else if (name === "R4-P17") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/5/52/R4-P17_USWNE.png/revision/latest/scale-to-width-down/350?cb=20200119211556"
        }
        else if (name === "San Hill") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/8/8b/SanHillHS-AOTC.png/revision/latest/scale-to-width-down/350?cb=20200730024920"
        }
        else if (name === "Shaak Ti") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png/revision/latest/scale-to-width-down/320?cb=20160914002036"
        }
        else if (name === "Grievous") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg/revision/latest/scale-to-width-down/500?cb=20100630082056"
        }
        else if (name === "Tarfful") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png/revision/latest/scale-to-width-down/500?cb=20220202061650"
        }
        else if (name === "Raymus Antilles") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png/revision/latest?cb=20180922045037"
        }
        else if (name === "Taun We") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg/revision/latest/scale-to-width-down/500?cb=20080117164920"
        }
    }
    // Page 9
    else if (page === 9) {
        if (name === "Tion Medon") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg/revision/latest/scale-to-width-down/350?cb=20091130182814"
        }
        else if (name === "Sly Moore") {
            person_image = "https://static.wikia.nocookie.net/starwars/images/b/b7/SlyMooreStare-OP.png/revision/latest/scale-to-width-down/500?cb=20211214041804"
        }
    }
    return person_image
}

// Buttons prev and next
document.querySelector("#next-btn").addEventListener("click", function () {
    if (page < 9) {
        let content_container = document.querySelector(".content-container")
        content_container.innerHTML = ""
        showPeople(page += 1)
    }
    else {
        alert("You're on last page !")
    }
})

document.querySelector("#prev-btn").addEventListener("click", function () {
    if (page > 1) {
        let content_container = document.querySelector(".content-container")
        content_container.innerHTML = ""
        showPeople(page -= 1)
    }
    else {
        alert("You're on page 1 !")
    }
})