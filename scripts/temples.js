const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `&copy<span class="highlight">${today.getFullYear()}</span> &diams; Iara Agostina Arias &diams; Argentina &diams;`;
document.getElementById("lastModified").innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`

const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});