// FOOTER CODE: DISPLAY CURRENT YEAR AND LAST MODIFICATION
const currentYear = document.querySelector('#currentyear');
const lastModification = document.querySelector('#lastModified');
const today = new Date();

currentYear.innerHTML = `<span>©${today.getFullYear()}</span> &#9827 Iara Agostina Arias &#9827 Argentina`;
lastModification.innerHTML = `Last Modification: ${document.lastModified}`;

// MENU BUTTON CODE

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("ul");

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");
});
