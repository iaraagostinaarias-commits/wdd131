const year = document.querySelector("#currentYear");
const lastModification = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span> &#9827 Iara Agostina Arias &#9827 Argentina`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
});