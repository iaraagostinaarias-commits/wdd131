const castles = [
    {
        id: "neuschwanstein",
        name: "Neuschwanstein Castle",
        image: [
            "images/neuschwanstein2.webp",
            "images/neuschwanstein3.webp",
        ]
    },
    {
        id: "himeji",
        name: "Himeji Castle",
        image: [
            "images/himeji2.webp",
            "images/himeji3.webp"
        ]
    },
    {
        id: "bran",
        name: "Bran Castle",
        image: [
            "images/bran4.webp",
            "images/bran1.webp"
        ]
    },
    {
        id: "edinburgh",
        name: "Edinburgh Castle",
        image: [
            "images/edimburgo1.webp",
            "images/edimburgo2.webp"
        ]
    },
    {
        id: "alcazar",
        name: "Alcazar Segovia Castle",
        image: [
            "images/Alcázar2.webp",
            "images/Alcázar1.webp"
        ]
    },
    {
        id: "malbork",
        name: "Malbork Castle",
        image: [
            "images/malbork1.webp",
            "images/malbork2.webp"
        ]
    },
];


// DISPLAY CASTLES OPTIONS
const selectCastle = document.getElementById('castleOpt');

function displayCastlesOptions(array) {
    array.forEach(castle => {
        const castleOption = document.createElement('option');
        castleOption.value = castle.id;
        castleOption.textContent = castle.name;

        selectCastle.append(castleOption);
    });
}

displayCastlesOptions(castles);

