// MENU BTN CODE
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("ul");

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

// DISPLAY TEMPLES CODE
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bahía Blanca Argentina",
        location: "Bahía Blanca, Argentina",
        dedicated: "2022, April, 9",
        area: 23400,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191.jpg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Argentina",
        dedicated: "2024, June, 16",
        area: 27000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241.jpg"
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 36780,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31201.jpg"
    }
];

function createTempleCard(templesArr) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    templesArr.forEach(templeInfo => {
        const card = document.createElement('section');
        card.innerHTML = `
        <h2><strong>${templeInfo.templeName}</strong></h2>
        <p><strong>Location:</strong> ${templeInfo.location}</p>
        <p><strong>Dedicated:</strong> ${templeInfo.dedicated}</p>
        <p><strong>Size:</strong> ${templeInfo.area} sq ft</p>
        <img src="${templeInfo.imageUrl}" alt="${templeInfo.templeName}"  loading="lazy">
        `
        gallery.appendChild(card);
    })
}


const home = document.querySelector("#home")
const oldTemp = document.querySelector("#oldTemp");
const newTemp = document.querySelector("#newTemp");
const largeTemp = document.querySelector("#largeTemp");
const smallTemp = document.querySelector("#smallTemp");

home.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples);
});

oldTemp.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));
});

newTemp.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000));
});

largeTemp.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTemp.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

createTempleCard(temples);
