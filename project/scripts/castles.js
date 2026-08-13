// DISPLAY CASTLES CARDS CODE
const castles = [
    {
        id: "neuschwanstein",
        name: "Neuschwanstein Castle",
        location: "Schwangau, Baviera, Germany",
        age: "1869",
        description: "Más que una fortaleza medieval, Neuschwanstein es un castillo de fantasía construido en el siglo XIX por el rey Luis II de Baviera. Se levantó sobre los restos de antiguas fortificaciones y fue diseñado para recrear la estética romántica de la Edad Media, mezclando torres, murallas y salones inspirados en leyendas medievales y las obras de Richard Wagner. Nunca llegó a completarse del todo.",
        image: [
            "images/neuschwanstein2.webp",
            "images/neuschwanstein3.webp",
        ]
    },
    {
        id: "himeji",
        name: "Himeji Castle",
        location: "Himeji, Hyogo, Japan",
        description: "Conocido como el Castillo de la Garza Blanca por sus paredes blancas, Himeji es uno de los castillos japoneses históricos mejor conservados. Su impresionante torre principal está rodeada por una compleja red de torres, pasadizos y defensas diseñadas para confundir a cualquier invasor que intentara atravesarlas.",
        age: "1346",
        image: [
            "images/himeji2.webp",
            "images/himeji3.webp"
        ]
    },
    {
        id: "bran",
        name: "Bran Castle",
        location: "Bran, Transilvania",
        description: "Bran es una antigua fortaleza situada estratégicamente entre Transilvania y Valaquia. Durante siglos tuvo funciones defensivas y comerciales, y en el siglo XX se convirtió en residencia de la reina María de Rumania. Hoy es mundialmente conocido como el “Castillo de Drácula”, aunque la relación con Vlad el Empalador y con el Drácula de Bram Stoker es mucho más legendaria que histórica.",
        age: "1377",
        image: [
            "images/bran4.webp",
            "images/bran1.webp"
        ]
    },
    {
        id: "edinburgh",
        name: "Edinburgh Castle",
        location: "Edinburgh, Scotland",
        description: "Construido sobre Castle Rock, una enorme formación volcánica que domina Edimburgo, es uno de los lugares fortificados más antiguos de Europa. A lo largo de su historia fue residencia real, fortaleza militar, guarnición y prisión, y fue escenario de numerosos asedios y conflictos que marcaron la historia de Escocia",
        age: "Iron Ege",
        image: [
            "images/edimburgo1.webp",
            "images/edimburgo2.webp"
        ]
    },
    {
        id: "alcazar",
        name: "Alcazar Segovia Castle",
        location: "Segovia, Castilla y Leon, Spain",
        description: "Levantado sobre un promontorio entre los ríos Eresma y Clamores, el Alcázar fue fortaleza, residencia real y prisión. Sus torres y tejados puntiagudos le dan una apariencia casi de cuento, mientras que su interior conserva salas históricas, armaduras y elementos vinculados a la monarquía castellana.",
        age: "1862",
        image: [
            "images/Alcázar2.webp",
            "images/Alcázar1.webp"
        ]
    },
    {
        id: "malbork",
        name: "Malbork Castle",
        location: "Malbork, Poland",
        description: "Malbork fue construido por la Orden Teutónica y llegó a convertirse en la sede del Gran Maestre. Es un enorme complejo fortificado de ladrillo que combina monasterio, residencia y fortaleza. UNESCO lo considera uno de los ejemplos más destacados de arquitectura gótica en ladrillo y uno de los complejos medievales fortificados más completos que existen.",
        age: "1309",
        image: [
            "images/malbork1.webp",
            "images/malbork2.webp"
        ]
    },
];


function displayCastlesCards(castlesArray) {
    const gallery = document.getElementById('gallery');
    // gallery.innerHTML = "";
    castlesArray.forEach(castle => {
        const card = document.createElement('section');
        card.innerHTML = `
        <button class="favorite">&#10084;</button>
        <img src="${castle.image[0]}" alt="${castle.name}"  loading="lazy">
        <h2><strong>${castle.name}</strong></h2>
        <p><strong>Location: </strong>${castle.location}</p>
        <p><strong>Aprox. Age: </strong>${castle.age}</p>
        <p class="castleDescrp">${castle.description}</p>
        `
        gallery.appendChild(card);

        const favBtn = card.querySelector(".favorite");
        favBtn.addEventListener('click', () => {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            favBtn.classList.toggle("liked");

            if (favorites.includes(castle.id)) {
                favorites = favorites.filter(id => id !== castle.id)
            } else {
                favorites.push(castle.id);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(castle.id)) {
            favBtn.classList.add("liked");
        }
    })
}

displayCastlesCards(castles);
